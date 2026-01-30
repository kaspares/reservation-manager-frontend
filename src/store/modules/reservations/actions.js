const API_URL = import.meta.env.VITE_API_URL
export default {
  async addReservation(context, data) {
    const reservationData = {
      firstName: data.firstName,
      lastName: data.lastName,
      guests: data.guests,
      phoneNum: data.phoneNum,
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      status: data.status || 'Pending',
      comment: data.comment || '',
      price: data.price || 0,
    }

    //const token = context.rootGetters.token

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData),
    })

    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch')
      throw error
    }

    context.commit('addReservation', reservationData)
  },
  async loadReservations(context, payload) {
    const response = await fetch(API_URL)
    const responseData = await response.json()

    if (!response.ok) {
      return
    }

    const reservations = []

    if (responseData) {
      for (const key in responseData) {
        reservations.push({
          id: key,
          ...responseData[key],
        })
      }
    }

    context.commit('setReservations', reservations)
  },
}
