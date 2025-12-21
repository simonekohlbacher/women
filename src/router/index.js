import { createRouter, createWebHistory } from 'vue-router'


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
    }
  ],
})

export default router
