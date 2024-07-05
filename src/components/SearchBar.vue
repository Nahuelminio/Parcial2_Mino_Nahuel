<template>
  <div>
    <input
      class="input"
      type="text"
      v-model="query"
      @input="onInput"
      placeholder="Buscar películas..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onInput() {
      this.$emit("search", this.query);
    },
  },
};
</script>
