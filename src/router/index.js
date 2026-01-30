import ReservationForm from '@/components/reservations/ReservationForm.vue'
import NotFound from '@/pages/NotFound.vue'
import AddReservation from '@/pages/reservations/AddReservation.vue'
import ReservationDash from '@/pages/reservations/ReservationDash.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path: '/add-reservation',
      component: AddReservation,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
})

export default router
