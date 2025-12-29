import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Categories from "../views/Categories.vue";
import GenderPayGap from "../views/GenderPayGap.vue"
import PinkTax from "../views/PinkTax.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView
    },
    {
    path: '/categories',
    name: 'categories',
    component: Categories
    },
     {
    path: '/oekonomisch/gender-pay-gap',
    name: 'gender-pay-gap',
    component: GenderPayGap
    },
         {
    path: '/oekonomisch/pink-tax',
    name: 'pink-tax',
    component: PinkTax
    }
  ],
})

export default router
