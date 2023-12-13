<template>
  <div style="margin-top: 100px">
    <h2>Listado de Productos</h2>
    <div v-if="productos.length === 0">
      <p>No hay productos disponibles.</p>
    </div>
    <div v-else>
      <div class="productos-container">
        <router-link
          v-for="producto in productos"
          :key="producto.id"
          :to="{ name: 'ProductDetail', params: { id: producto.id } }"
        >
          <Card :image-url="producto.imgUrl" :title="producto.productName" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
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
  },
  computed: {
    filteredProducts() {
      const searchQuery = this.$route.query.search || "";
      return this.productos.filter((producto) =>
        producto.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.productos-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

/* Ajusta el ancho y el margen de las tarjetas según tus preferencias */
.card {
  width: 200px;
  margin: 20px;
}
</style>
