<template  class="pelicula"  >
  <div  class="pelicula" v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster">
    <p>{{ movie.overview }}</p>
    <p>Año de lanzamiento: {{ movie.release_date.split('-')[0] }}</p>
    <button @click="addToFavorites">Agregar a Favoritos</button>
  </div>
  <LoadingError :loading="loading" :error="error"/>
</template>

<script>
import { fetchMovieDetails } from '../services/apiService';
import LoadingError from '../components/LoandingError.vue';

export default {
  components: { LoadingError },
  data() {
    return {
      movie: null,
      loading: true,
      error: null
    };
  },
  created() {
    this.loadMovieDetails();
  },
  methods: {
    async loadMovieDetails() {
      try {
        const movieId = this.$route.params.id;
        this.movie = await fetchMovieDetails(movieId);
        this.loading = false;
      } catch (error) {
        console.error('Error al cargar los detalles de la película:', error);
        this.error = 'No se pudieron cargar los detalles de la película. Por favor, intenta nuevamente.';
        this.loading = false;
      }
    },
    addToFavorites() {
         
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.some(fav => fav.id === this.movie.id)) {
    
        favorites.push(this.movie);
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    }
  }
};

</script>
