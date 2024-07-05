<template>
  <div class="div-favoritos">
    <h2 style="color:white; text-align:center">Películas Favoritas</h2>
    <div class="" v-if="favorites.length">
      <ul class="favoritos">
        <li v-for="movie in favorites" :key="movie.id" class="movie-item">
          <router-link :to="`/movie/${movie.id}`">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title" class="movie-poster"/>
            <p>{{ movie.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No tienes películas favoritas.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: []
    };
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    loadFavorites() {
      this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    }
  }
};
</script>

