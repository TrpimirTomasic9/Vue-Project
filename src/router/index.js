import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Watch from '../views/watchlist.vue'
import Faves from '../views/favorites.vue'
import Watched from '../views/watched.vue'
import About from '../views/about.vue'
import Dashboard from '../views/dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
  },
  {
      path: '/watchlist',
      name: 'watchlist',
      component: Watch
  },
  {
      path: '/favourites',
      name: 'favourites',
      component: Faves
  },
  {
    path: '/watched',
    name: 'watched',
    component: Watched
  },
  {
      path: '/aboutus',
      name: 'aboutus',
      component: About
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
  }
  ]
})

export default router
