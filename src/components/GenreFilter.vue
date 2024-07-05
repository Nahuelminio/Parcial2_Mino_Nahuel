<template>
  <div>
    <label for="genre-select">Filtrar por género:</label>
    <select id="genre-select" @change="onGenreChange">
      <option value="">Todos</option>
      <option v-for="genre in genres" :key="genre.id" :value="genre.id">
        {{ genre.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      type: Array,
      required: true
    }
  },
  methods: {
    onGenreChange(event) {
      const genreId = event.target.value;
      this.$emit('filter', genreId ? parseInt(genreId) : null);
    }
  }
};
</script>
