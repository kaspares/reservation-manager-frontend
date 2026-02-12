<template>
  <div class="overflow-x-auto border border-base-300 rounded-lg">
    <table class="table table-zebra table-bordered">
      <thead>
        <tr>
          <th>Deposit</th>
          <th>Lastname</th>
          <th>Guests</th>
          <th>Nights</th>
          <th>Date From</th>
          <th>Date To</th>
          <th>Phone</th>
          <th></th>
        </tr>
      </thead>

      <tbody class="text-xl">
        <ReservationRow
          v-for="r in reservations"
          :key="r.id"
          :reservation="r"
          @details="openDetails"
          @delete="deleteReservation"
        />
      </tbody>
    </table>
  </div>

  <ReservationDetailsModal v-model:open="detailsOpen" :reservation="selectedReservation" />
</template>

<script>
import ReservationRow from '@/components/reservations/ReservationRow.vue'
import ReservationDetailsModal from './ReservationDetailsModal.vue'

export default {
  props: {
    reservations: {
      type: Array,
      required: true,
    },
  },
  components: {
    ReservationDetailsModal,
    ReservationRow,
  },
  data() {
    return {
      detailsOpen: false,
      selectedReservation: null,
    }
  },
  methods: {
    openDetails(reservation) {
      this.selectedReservation = reservation
      this.detailsOpen = true
    },
    async deleteReservation(id) {
      await this.$store.dispatch('reservations/deleteReservation', id)
    }
  },
}
</script>
