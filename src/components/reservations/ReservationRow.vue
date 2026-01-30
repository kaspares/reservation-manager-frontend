<template>
  <tr>
    <td>
      <!-- Confirmed -->
      <input
        type="checkbox"
        class="checkbox"
        :checked="reservation.status === 'Confirmed'"
        disabled
      />
    </td>
    <!-- Lastname-->
    <td class="font-bold">
      {{ reservation.lastName }}
    </td>
    <!-- Guests -->
    <td>
      {{ guests }}
    </td>
    <td>{{ nights }}</td>
    <td>
      {{ reservation.dateFrom }}
    </td>
    <td>
      {{ reservation.dateTo }}
    </td>
    <td>
      {{ reservation.phoneNum }}
    </td>
    <td>
      <button class="btn btn-sm btn-primary w-full p-4" @click="$emit('details', reservation)">
        Details
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  emits: ['details'],
  props: {
    reservation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    nights() {
      const a = new Date(this.reservation.dateFrom)
      const b = new Date(this.reservation.dateTo)
      const diff = Math.round((b - a) / (1000 * 60 * 60 * 24))
      return isNaN(diff) ? '-' : diff
    },
    guests() {
      const guestsNum = this.reservation.guests.adults + this.reservation.guests.children
      return guestsNum
    },
  },
}
</script>
