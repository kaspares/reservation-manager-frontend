const API_URL = import.meta.env.VITE_API_URL
const nights = ((data) => {
      const a = new Date(data.dateFrom)
      const b = new Date(data.dateTo)
      const diff = Math.round((b - a) / (1000 * 60 * 60 * 24))
      return isNaN(diff) ? 0 : diff
    })

const fullCost = ((data) => {
      return nights(data) * data.price * (data.guests.adults + data.guests.children) 
    }) 

export default {
  async addReservation(context, data) {
    const reservationData = {
      firstName: data.firstName,
      lastName: data.lastName,
      guests: data.guests,
      phoneNum: data.phoneNum,
      dateFrom: data.dateFrom,
      dateTo: data.dateTo,
      nights: nights(data),
      comment: data.comment || '',
      price: data.price || 0,
      deposit: false,
      fullCost: fullCost(data),
    }

    //const token = context.rootGetters.token

    const response = await fetch(`${API_URL}.json`, {
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
    const response = await fetch(`${API_URL}.json`)
    const responseData = await response.json()

    if (!response.ok) {
      const error = new Error(responseData?.message || 'Failed to load')
      throw error
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
  async deleteReservation(context, id) {
    const response = await fetch(`${API_URL}/${id}.json`, { 
      method: 'DELETE',
    })

    if (!response.ok) {
      const error = new Error('Failed to delete')
      throw error
    }

    context.commit('removeReservation', id)
  },
  async updateDeposit(context, payload) {
    const response = await fetch(`${API_URL}/${payload.id}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({deposit: payload.deposit})
    })

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData?.message || 'Failed to update deposit')
      throw error
    }

    context.commit('setDeposit', payload)
  }
}
