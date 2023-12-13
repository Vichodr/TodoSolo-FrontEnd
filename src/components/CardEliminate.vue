<!-- CardEliminate.vue -->
<template>
    <div class="card">
      <img :src="imageUrl" alt="Card Image" class="card-image" />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <button @click="$emit('click')">Eliminar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
    props: {
      imageUrl: String,
      title: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    margin: 20px; /* Ajusta el margen a tus preferencias */
    width: 200px; /* Ajusta el ancho a tus preferencias */
  }
  
  .card-image {
    padding: 10px;
    width: 100%;
    height: auto;
  }
  
  .card-content {
    padding: 16px;
  }
  
  .card-title {
    margin: 0;
    font-size: 18px;
  }
  
  button {
    width: 100%;
    padding: 8px;
    margin-top: 8px;
    background-color: #dc3545; /* Color de fondo rojo */
    color: #fff; /* Color de texto blanco */
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  