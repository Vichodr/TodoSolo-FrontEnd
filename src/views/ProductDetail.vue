<template>
  <div class="product-detail-container">
    <div class="product-image-container">
      <img
        :src="producto.imgUrl"
        alt="Product Image"
        style="max-width: 600px"
      />
    </div>
    <div class="product-info-container">
      <h2>{{ producto.productName }}</h2>
      <p>{{ producto.productDescription }}</p>
      <button @click="agregarAWishlist">Agregar a Wishlist</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { WishlistService } from "@/services/WishlistService";

export default {
  data() {
    return {
      producto: {},
    };
  },
  mounted() {
    this.obtenerDetalleProducto();
  },
  methods: {
    async obtenerDetalleProducto() {
      const productId = this.$route.params.id;
      try {
        const response = await axios.get(
          `http://localhost:8080/Product/getProductById/${productId}`
        );
        console.log("Respuesta del servidor:", response.data);
        this.producto = response.data;
      } catch (error) {
        console.error("Error al obtener detalle del producto:", error);
      }
    },

    agregarAWishlist() {
      WishlistService.addToWishlist(this.producto);
      console.log("Producto agregado a la Wishlist", this.producto);
      alert("Producto agregado a la Wishlist");
    },
  },
};
</script>

<style scoped>
.product-detail-container {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid rgba(0, 0, 0, 0.315);
}

.product-image-container {
  flex: 1;
}

.product-info-container {
  flex: 2;
  padding: 20px;
}

.product-info-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-info-container p {
  font-size: 16px;
  line-height: 1.6;
}
</style>
