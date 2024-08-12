import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/landing/HomeView.vue'
import LandingView from '@/views/landing/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/landing'
    },
    {
      path: '/landing',
      component: LandingView,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'authenticate/:action',
          name: 'authenticate',
          props: true,
          component: () => import('../views/landing/AuthenticationView.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
