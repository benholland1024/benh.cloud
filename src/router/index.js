import { createRouter, createWebHistory } from 'vue-router'
import Landing2 from '../views/Landing2.vue'

const routes = [
  {
    path: '/',
    name: 'Landing2',
    component: Landing2
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting -- this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/plans',
    name: 'Plans',
    component: () => import('../views/Plans.vue')
  },
  {
    path: '/landing',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/dash',
    name: 'Dash',
    component: () => import('../views/Dash.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
