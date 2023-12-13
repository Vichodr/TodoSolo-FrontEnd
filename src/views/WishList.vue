<!-- Wishlist.vue -->

<template>
    <div>
      <h2>Wishlist</h2>
      <div v-if="productosEnWishlist.length === 0">
        <p>La wishlist está vacía.</p>
      </div>
      <div v-else>
        <div class="wishlist-container">
          <Card
            v-for="producto in productosEnWishlist"
            :key="producto.id"
            :image-url="producto.imgUrl"
            :title="producto.productName"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { WishlistService } from "@/services/WishlistService";
  import Card from "@/components/Card.vue"; // Ajusta la ruta según tu estructura de carpetas
  
  export default {
    components: {
      Card,
    },
  
    computed: {
      productosEnWishlist() {
        return WishlistService.getWishlist();
      },
    },
  };
  </script>
  
  <style scoped>
  .wishlist-container {
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
  }
  
  /* Ajusta el ancho y el margen de las tarjetas según tus preferencias */
  .card {
    width: 150px;
    margin: 10px;
  }
  </style>
  