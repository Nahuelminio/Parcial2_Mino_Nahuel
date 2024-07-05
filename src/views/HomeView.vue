<template>

  <div>
    <div class="div-header">
      <SearchBar @search="searchMovies" />
      <GenreFilter :genres="genres" @filter="filterByGenre" />
      
    </div>
    <LoadingError :loading="loading" :error="error" />
    <MovieList
      v-if="!loading && !error"
      :movies="filteredMovies"
      :title="listTitle"
    />
  </div>
</template>

<script>
import { fetchMovies, fetchGenres } from "../services/apiService";
import SearchBar from "../components/SearchBar.vue";
import GenreFilter from "../components/GenreFilter.vue";
import MovieList from "../components/MovieList.vue";
import LoadingError from "../components/LoandingError.vue";

export default {
  components: { SearchBar, GenreFilter, MovieList, LoadingError },
  data() {
    return {
      movies: [],
      filteredMovies: [],
      genres: [],
      selectedGenre: null,
      loading: true,
      error: null,
    };
  },
  created() {
    this.loadMovies();
    this.loadGenres();
  },
  methods: {
    async loadMovies() {
      try {
        let movies = [];
        let page = 1;
        const maxPages = 500;

        while (page <= maxPages) {
          const data = await fetchMovies(page);
          movies = movies.concat(data.results);

          if (page >= data.total_pages) {
            break;
          }
          page++;
        }

        movies = movies.filter((movie) => movie.id);
        this.movies = movies;
        this.filteredMovies = movies;
        this.loading = false;
      } catch (error) {
        console.error("Error al cargar las películas:", error);
        this.error =
          "No se pudieron cargar las películas. Por favor, intenta nuevamente.";
        this.loading = false;
      }
    },
    async loadGenres() {
      try {
        this.genres = await fetchGenres();
      } catch (error) {
        console.error("Error al cargar los géneros:", error);
        this.error =
          "No se pudieron cargar los géneros. Por favor, intenta nuevamente.";
      }
    },
    searchMovies(query) {
      if (query) {
        this.filteredMovies = this.movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.filteredMovies = this.movies;
      }
    },
    filterByGenre(genreId) {
      this.selectedGenre = genreId;
      if (genreId) {
        this.filteredMovies = this.movies.filter(
          (movie) => movie.genre_ids && movie.genre_ids.includes(genreId)
        );
      } else {
        this.filteredMovies = this.movies;
      }
    },
  },
  computed: {
    listTitle() {
      if (this.selectedGenre) {
        const genre = this.genres.find(
          (genre) => genre.id === this.selectedGenre
        );
        return `Películas de ${genre ? genre.name : ""}`;
      }
      return "Todas las Películas";
    },
  },
};
</script>
