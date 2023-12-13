<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      @input="handleInput"
      type="text"
      placeholder="Buscar un producto..."
    />
    <button @click="handleSearch">
      <img src="@/assets/images/lupa.png" alt="Search Icon" style="height: 10px;" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleInput() {
      // Puedes realizar acciones adicionales al escribir en la barra de búsqueda si es necesario
    },
    handleSearch() {
      // Emitir un evento de búsqueda con el término actual
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>
