import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '../views/landingpage.vue'
import LoginPage from '../views/loginpage.vue'
import Dashboard from '../views/dashboard.vue'
import ShoppingCart from '../views/shoppingcart.vue'

const routes = [
  {
    path: '/',
    component: LandingPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/cart',
    component: ShoppingCart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router