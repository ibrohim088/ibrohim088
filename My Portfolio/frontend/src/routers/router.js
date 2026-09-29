import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

export default router