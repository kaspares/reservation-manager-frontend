export default {
  addReservation(state, payload) {
    state.reservations.push(payload)
  },
  setReservations(state, payload) {
    state.reservations = payload
  },
}
