export default {
  addReservation(state, payload) {
    state.reservations.push(payload)
  },
  setReservations(state, payload) {
    state.reservations = payload
  },
  removeReservation(state, id) {
    state.reservations = state.reservations.filter(r => r.id !== id)
  }
}
