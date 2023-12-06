<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      @input="handleInput"
      type="text"
      placeholder="Buscar un producto..."
    />
    <button @click="handleSearch">
      <img src="@/assets/images/lupa.png" alt="Search Icon" />
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
      // Puedes realizar acciones cuando se hace clic en el botón de búsqueda
      console.log('Realizar búsqueda con:', this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  max-width: 300px;
  margin: 0 auto;
}

input {
  flex: 1;
  border: none;
  padding: 8px;
  font-size: 16px;
}

button {
  background-color: rgb(56, 117, 187);
  border: none;
  padding: 7px;
  cursor: pointer;
}

button img {
  width: 18px; /* Ajusta el tamaño de la imagen según tus preferencias */
  height: 18px;
}
</style>
