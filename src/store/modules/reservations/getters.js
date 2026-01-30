export default {
  reservations(state) {
    return state.reservations
  },
  hasReservations(state) {
    return state.reservations && state.reservations.length  > 0
  }
}
