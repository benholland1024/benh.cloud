import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'

const routes = [
  //////////////////////////
  //    Public routes:    //
  //////////////////////////
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    // route level code-splitting -- this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  //////////////////////////
  //    Hidden routes:    //
  //////////////////////////
  {
    path: '/dash',
    name: 'Dash',
    component: () => import('../views/Dash.vue')
  },
  {
    path: '/3d-playground',
    name: '3dPlayground',
    component: () => import('../views/3dPlayground.vue')
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
