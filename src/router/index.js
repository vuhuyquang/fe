import { createRouter, createWebHistory } from 'vue-router'
import app from '~/router/app'

const routes = [...app]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router