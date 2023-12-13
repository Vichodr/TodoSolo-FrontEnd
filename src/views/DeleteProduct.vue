<!-- DeleteProduct.vue -->

<template>
  <div style="margin-top: 100px">
    <h2>Eliminar Producto</h2>
    <div v-if="productos.length === 0">
      <p>No hay productos disponibles.</p>
    </div>
    <div v-else>
      <div class="productos-container">
        <CardEliminate
          v-for="producto in productos"
          :key="producto.id"
          :image-url="producto.imgUrl"
          :title="producto.productName"
          @click="eliminarProducto(producto.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardEliminate from "@/components/CardEliminate.vue"; // Ajusta la ruta según tu estructura de carpetas

export default {
  components: {
    CardEliminate,
  },
  data() {
    return {
      productos: [],
    };
  },
  mounted() {
    this.obtenerProductos();
  },
  methods: {
    async obtenerProductos() {
      try {
        const response = await axios.get(
          "http://localhost:8080/Product/showAllProducts"
        );
        console.log("Respuesta del servidor:", response.data);
        this.productos = response.data;
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    },
    async eliminarProducto(id) {
      try {
        await axios.delete(
          `http://localhost:8080/Product/deleteProductById/${id}`
        );
        // Actualizar la lista de productos después de la eliminación
        this.obtenerProductos();
      } catch (error) {
        console.error("Error al eliminar producto:", error);
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 20px; /* Ajusta este margen según tus necesidades */
}

.productos-container {
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
}

/* Ajusta el ancho y el margen de las tarjetas según tus preferencias */
.card {
  flex: 1 1 200px; /* Ajusta según tus necesidades */
  margin: 10px;
}
</style>



