<template>
  <ReservationForm @save-data="saveData"></ReservationForm>
</template>

<script>
import ReservationForm from '@/components/reservations/ReservationForm.vue'

export default {
  components: {
    ReservationForm,
  },
  methods: {
    async saveData(data) {
  console.log('PARENT GOT EVENT ✅', data)
  try {
    await this.$store.dispatch('reservations/addReservation', data)
    console.log('DISPATCH OK ✅')
    this.$router.replace('/')
  } catch (err) {
    console.log('DISPATCH ERROR ❌', err)
  }
}
  },
}
</script>
