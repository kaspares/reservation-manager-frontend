import { createStore } from 'vuex'
import reservationsModule from './modules/reservations/index.js'
const store = createStore({
  modules: {
    reservations: reservationsModule
  },
  state() {
    return {}
  },
  getters: {},
})

export default store
