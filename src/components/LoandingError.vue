<template>
  <div v-if="loading">
    <p style="color:white">Cargando...</p>
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true
    },
    error: {
      type: [String, null],
      default: null
    }
  }
};
</script>
