
<template>

  <div v-if="movies.length">
    <h2 class="h2">{{ title }}</h2>
    <ul class="movie-list">
      <li v-for="movie in movies" :key="movie.id || movie.title" class="movie-item">
        <router-link v-if="movie.id" :to="`/movie/${movie.id}`">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title" class="movie-poster"/>
          <p>{{ movie.title }}</p>
        </router-link>
        <span v-else>
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title" class="movie-poster"/>
          <p >{{ movie.title }}</p>
        </span>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>No se encontraron películas.</p>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>


