import { createStore } from 'vuex'
import reservationsModule from './modules/reservations/index.js'
import authModule from './modules/auth/index.js'
const store = createStore({
  modules: {
    reservations: reservationsModule,
    auth: authModule
  },
  state() {
    return {}
  },
  getters: {},
})

export default store
