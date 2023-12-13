<template>
  <div class="navigation-bar">
    <div class="logo">
      <img src="@/assets/images/zorro.png" alt="LogoPagina" />
      <router-link to="/"><span class="logo-text">TODO<span class="orange-text">SOLO</span></span></router-link>
    </div>
    <div class="search-bar">
      <SearchBar @search="handleSearch"></SearchBar>
    </div>
    <div class="menu-item">
      <img src="@/assets/images/category.png" alt="Category icon" />
      <router-link to="/ListProducts"><span class="nav-text">Productos</span></router-link>
    </div>
    <div class="menu-item">
      <img src="@/assets/images/user.png" alt="User Icon" />
      <span class="nav-text" @click="toggleMenu">Admin</span>
      <DropdownMenu
        v-if="showMenu"
        :options="menuOptions"
        :onOptionClick="handleOptionClick"
      />
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import DropdownMenu from './DropdownMenu.vue';

export default {
    name: "Navbar",
    components: { SearchBar, DropdownMenu},
    data() {
    return {
      showMenu: false,
      menuOptions: ['Agregar Producto', 'Eliminar Producto', 'Lista de Deseos'],
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    handleOptionClick(option) {
      console.log(`Opción seleccionada: ${option}`);
      // Puedes realizar acciones adicionales cuando se hace clic en una opción
      if (option === 'Agregar Producto') {
        // Navegar a la vista Login
        this.$router.push({ name: 'addProduct' });
      }
      if (option === 'Eliminar Producto') {
        // Navegar a la vista Login
        this.$router.push({ name: 'deleteProduct' });
      }
      if (option === 'Lista de Deseos') {
        // Navegar a la vista Login
        this.$router.push({ name: 'wishList' });
      }
    },
    handleSearch(searchQuery) {
      // Navegar a la vista de lista de productos con el término de búsqueda como parámetro
      this.$router.push({ name: 'listProducts', query: { search: searchQuery } });
    },
  },
};

</script>

<style scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgb(18, 75, 141);
  color: white;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.search-bar {
  flex: 1;
  margin: 0 100px;
}

.menu-item {
  display: flex;
  align-items: center;
  margin-right: 70px;
}

.menu-item img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}

.nav-text {
  font-weight: 500;
  font-size: 20px;
  color: white;
}
.logo-text {
  font-weight: bold;
  font-size: 24px;
  color: white;
}

.orange-text {
  font-weight: bold;
  font-size: 24px;
  color: orange;
}

.menu-item {
  position: relative;
  cursor: pointer;
}

.menu-item:hover .dropdown-menu {
  display: flex;
}
</style>
