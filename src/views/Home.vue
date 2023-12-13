<template>
  <div style="padding-top: 100px">
    <h2>Productos Populares</h2>
    <div v-if="randomProducts.length === 0">
      <p>No hay productos aleatorios disponibles.</p>
    </div>
    <div v-else>
      <div class="productos-container">
        <Card v-for="producto in randomProducts" :key="producto.id" :image-url="producto.imgUrl" :title="producto.productName" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue'; // Ajusta la ruta según tu estructura de carpetas

export default {
  components: {
    Card,
  },
  data() {
    return {
      randomProducts: [],
    };
  },
  mounted() {
    this.fetchRandomProducts();
  },
  methods: {
    async fetchRandomProducts() {
      try {
        const response = await axios.get('http://localhost:8080/Product/random');
        console.log('Respuesta del servidor:', response.data);
        this.randomProducts = response.data;
      } catch (error) {
        console.error('Error al obtener productos aleatorios:', error);
      }
    },
  },
};
</script>

<style>
.productos-container {
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
}

.card {
  width: 100px;
  margin: 10px;
}
</style>
