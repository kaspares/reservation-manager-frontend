<template>
    <div class="min-h-screen bg-base-100 text-base-content">
      <div class="flex justify-center m-4 gap-8">
        <StatCard :title="'Reservations'" :value="reservations.length"></StatCard>
        <StatCard :title="'Income'" :value="totalIncome + ' $'"></StatCard>
      </div>
      <div class="flex justify-center m-10">
        <router-link class="btn btn-xl" :to="`/add-reservation`">Add new reservation</router-link>
      </div>
      <div class="m-10 bg-base-300 p-4">
          <p v-if="!hasReservations" class="text-center text-2xl">No reservations found</p>
          <ReservationsList v-else :reservations="reservations" />
      </div>
    </div>
</template>

<script>
import ReservationsList from '@/components/reservations/ReservationsList.vue'
import StatCard from '@/components/ui/StatCard.vue';
export default {
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  components: {
    ReservationsList,
    StatCard
  },
  computed: {
    reservations() {
      return this.$store.getters['reservations/reservations']
    },
    hasReservations() {
      return this.$store.getters['reservations/hasReservations']
    }, 
    totalIncome() {
      return this.$store.getters['reservations/totalIncome']
    }


  },
  methods: {
    async loadReservations() {
      this.isLoading = true
      try {
        await this.$store.dispatch('reservations/loadReservations')
      } catch (error) {
        this.error = error.message || 'Something went wrong'
      }
      this.isLoading = false
    }
  },
  created() {
    this.loadReservations()
  },
}
</script>
