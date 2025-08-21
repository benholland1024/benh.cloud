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
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
  },
  /**********************/
  /*  PORFTOLIO PATHS:  */
  /**********************/
  {
    path: '/portfolio/data-pantry',
    name: 'DataPantry',
    component: () => import('../views/portfolio/DataPantry.vue')
  },
  {
    path: '/portfolio/albert-law',
    name: 'AlbertLaw',
    component: () => import('../views/portfolio/AlbertLaw.vue')
  },
  {
    path: '/portfolio/pulse-duplicator',
    name: 'PulseDuplicator',
    component: () => import('../views/portfolio/PulseDuplicator.vue')
  },
  {
    path: '/portfolio/khe-2019',
    name: 'khe2019',
    component: () => import('../views/portfolio/khe2019.vue')
  },
  /*********************************/
  /***  End of PORTFOLIO PATHS   ***/
  /*********************************/

  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
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
