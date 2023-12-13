<!-- AddProduct.vue -->

<template>
  <div class="container">
    <h2>Agregar Producto</h2>
    <form @submit.prevent="agregarProducto">
      <div class="form-group">
        <label for="productName">Nombre del Producto:</label>
        <input v-model="productName" type="text" id="productName" required />
      </div>

      <div class="form-group">
        <label for="productDescription">Descripción:</label>
        <textarea
          v-model="productDescription"
          id="productDescription"
          required
          :style="{ maxWidth: '280px', maxHeight: '150px', overflowY: 'auto' }"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="imgUrl">URL de la Imagen:</label>
        <input v-model="imgUrl" type="url" id="imgUrl" required />
      </div>

      <button type="submit">Agregar Producto</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Asegúrate de tener esta línea

export default {
  data() {
    return {
      productName: "",
      productDescription: "",
      imgUrl: "",
    };
  },
  methods: {
    async agregarProducto() {
      try {
        const response = await axios.post(
          "http://localhost:8080/Product/addProduct",
          {
            productName: this.productName,
            productDescription: this.productDescription,
            imgUrl: this.imgUrl,
          }
        );

        console.log("Respuesta del servidor:", response.data);

        // Puedes manejar la respuesta del servidor según tus necesidades
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        // Puedes manejar errores aquí
      }
    },
  },
};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  padding: 20px;
  width: 400px;
  margin: 0 auto; 
  display: flex;/* Esto centra el contenedor horizontalmente */
}

.form-group {
  margin-bottom: 15px;
}

/* Estilos adicionales según sea necesario */
</style>
