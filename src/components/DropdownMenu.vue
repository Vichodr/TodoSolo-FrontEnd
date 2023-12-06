<!-- DropdownMenu.vue -->
<template>
  <div class="dropdown-menu">
    <a
      v-for="(option, index) in options"
      :key="index"
      @click="handleOptionClick(option)"
    >
      {{ option }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    onOptionClick: Function,
  },
  methods: {
    handleOptionClick(option) {
      this.onOptionClick(option);
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 40%;
  display: none;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 8px;
}

a {
  padding: 8px; /* Ajusta el espacio interno de cada opción */
  text-decoration: none;
  color: #333; /* Ajusta el color del texto según tus preferencias */
}

/* Puedes agregar más estilos según tus preferencias */
</style>
