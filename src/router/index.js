import NotFound from '@/pages/NotFound.vue'
import AddReservation from '@/pages/reservations/AddReservation.vue'
import ReservationDash from '@/pages/reservations/ReservationDash.vue'
import UserAuth from '@/pages/auth/UserAuth.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'reservations',
    },
    {
      path: '/reservations',
      component: ReservationDash,
      meta: {requiresAuth: true}
    },
    {
      path: '/add-reservation',
      component: AddReservation,
      meta: {requiresAuth: true}
    },
    {
      path: '/auth',
      component: UserAuth,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.getters.isAuthenticated ) {
    next('/auth')
  } else {
    next()
  }
})

export default router
