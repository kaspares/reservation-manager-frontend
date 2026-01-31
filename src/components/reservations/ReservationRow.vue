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
    <td>{{ reservation.nights }}</td>
    <td>
      {{ reservation.dateFrom }}
    </td>
    <td>
      {{ reservation.dateTo }}
    </td>
    <td>
      {{ reservation.phoneNum }}
    </td>
    <td class="w-1">
      <div class="flex justify-end gap-2">
        <button class="btn btn-sm btn-primary p-4" @click="$emit('details', reservation)">
          Details
        </button>
        <button class="btn btn-sm btn-error p-4" @click="$emit('delete', reservation.id)">
          X
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  emits: ['details', 'delete'],
  props: {
    reservation: {
      type: Object,
      required: true,
    },
  },
  computed: {
    guests() {
      const guestsNum = this.reservation.guests.adults + this.reservation.guests.children
      return guestsNum
    },
  },
}
</script>
