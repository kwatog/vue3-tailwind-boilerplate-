import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    name: 'contact',
    path: '/contact',
    component: () => import('../pages/Contact.vue')
  },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  // mode: 'history',
  routes, // short for `routes: routes`
})

export default router
