import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import Login from '../views/Login.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Signup from '../views/Signup.vue'
import WishList from '../views/WishList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct
    },
    {
      path: '/editProduct',
      name: 'editProduct',
      component: EditProduct
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/wishList',
      name: 'wishList',
      component: WishList
    }
  ]
})

export default router
