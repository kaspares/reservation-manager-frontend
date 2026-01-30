<template>
  <dialog ref="dlg" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>

      <div v-if="reservation" class="mt-4 space-y-3">
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div class="opacity-70">Lastname</div>
          <div class="font-medium">{{ reservation.lastName }}</div>

          <div class="opacity-70">Adults</div>
          <div class="font-medium">{{ reservation.guests.adults }}</div>

          <div class="opacity-70">Children</div>
          <div class="font-medium">{{ reservation.guests.children }}</div>

          <div class="opacity-70">Nights</div>
          <div class="font-medium">{{ nights }}</div>

          <div class="opacity-70">Price per person</div>
          <div class="font-medium">{{ reservation.price }} zł</div>

          <div class="opacity-70">Phone</div>
          <div class="font-medium">{{ reservation.phoneNum }}</div>

          <div class="opacity-70">Dates</div>
          <div class="font-medium">{{ reservation.dateFrom }} → {{ reservation.dateTo }}</div>

          <div class="opacity-70">Full cost</div>
          <div class="font-medium">{{ fullCost }} zł</div>
        </div>

        <div>
          <div class="opacity-70 text-sm mb-1">Comment</div>
          <div class="p-3 rounded-lg bg-base-200 text-sm whitespace-pre-wrap">
            {{ reservation.comment || 'No comment' }}
          </div>
        </div>
      </div>

      <div class="modal-action">
        <button class="btn" @click="close">Close</button>
      </div>
    </div>

    <!-- klik w tło zamyka -->
    <form method="dialog" class="modal-backdrop">
      <button @click="close">close</button>
    </form>
  </dialog>
</template>

<script>
export default {
  name: 'ReservationDetailsModal',
  props: {
    open: { type: Boolean, default: false },
    reservation: { type: Object, default: null },
    title: { type: String, default: 'Reservation details' },
  },
  emits: ['update:open'],
  watch: {
    open(val) {
      if (val) this.$refs.dlg.showModal()
      else this.$refs.dlg.close()
    },
  },
  methods: {
    close() {
      this.$emit('update:open', false)
    },
  },
  computed: {
    nights() {
      const a = new Date(this.reservation.dateFrom)
      const b = new Date(this.reservation.dateTo)
      const diff = Math.round((b - a) / (1000 * 60 * 60 * 24))
      return isNaN(diff) ? '-' : diff
    },
    fullCost() {
      const fullPrice = this.nights * this.reservation.price
      return fullPrice
    },
  },
}
</script>
