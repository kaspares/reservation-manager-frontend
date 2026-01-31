export default {
  reservations(state) {
    return state.reservations
  },
  hasReservations(state) {
    return state.reservations && state.reservations.length  > 0
  },
  totalIncome(state) {
    return state.reservations.reduce((sum, r) => sum + (r.fullCost ?? 0), 0)
  }
}
