<template>
  <form @submit.prevent="submitForm">
    <div class="min-h-screen bg-base-300 flex items-center justify-center p-4">
      <div class="card w-full max-w-md bg-base-100 shadow-xl">
        <div class="card-body gap-6 m-6">
          <h2 class="card-title justify-center text-4xl">Reservation</h2>
          <label class="floating-label">
            <input
              type="text"
              placeholder="Firstname"
              class="input input-md"
              :class="{ 'input-error': !firstName.isValid }"
              v-model="firstName.val"
              @blur="clearValidity('firstName')"
            />
            <span>Firstname</span>
          </label>
          <label class="floating-label">
            <input
              type="text"
              placeholder="Lastname"
              class="input input-md"
              :class="{ 'input-error': !lastName.isValid }"
              v-model="lastName.val"
              @blur="clearValidity('lastName')"
            />
            <span>Lastname</span>
          </label>
          <label class="floating-label">
            <input
              type="number"
              placeholder="Guests"
              class="input input-md"
              :class="{ 'input-error': !guests.adults.isValid }"
              @blur="clearGuestValidity('adults')"
              v-model="guests.adults.val"
            />
            <span>Adults</span>
          </label>
          <label class="floating-label">
            <input
              type="number"
              placeholder="Guests"
              class="input input-md"
              :class="{ 'input-error': !guests.children.isValid }"
              @blur="clearGuestValidity('children')"
              v-model="guests.children.val"
            />
            <span>Children</span>
          </label>
          <label class="floating-label">
            <input
              type="text"
              placeholder="Phone"
              class="input input-md"
              :class="{ 'input-error': !phone.isValid }"
              v-model="phone.val"
              @blur="clearValidity('phone')"
            />
            <span>Phone</span>
          </label>
          <label class="floating-label">
            <input
              type="date"
              placeholder="Medium"
              class="input input-md"
              :class="{ 'input-error': !dateFrom.isValid }"
              @blur="clearValidity('dateFrom')"
              v-model="dateFrom.val"
            />
            <span>Date From</span>
          </label>
          <label class="floating-label">
            <input
              type="date"
              placeholder="Medium"
              class="input input-md"
              :class="{ 'input-error': !dateTo.isValid }"
              @blur="clearValidity('dateTo')"
              v-model="dateTo.val"
            />
            <span>Date To</span>
          </label>
          <p class="text-error" v-if="!formIsValid">Please fix the above errors and submit again</p>
          <div class="card-actions justify-start pt-2">
            <button class="btn btn-primary w-30" type="submit">Save</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      guests: {
        adults: {
          val: '',
          isValid: true,
        },
        children: {
          val: '',
          isValid: true,
        },
      },
      phone: {
        val: '',
        isValid: true,
      },
      dateFrom: {
        val: '',
        isValid: true,
      },
      dateTo: {
        val: '',
        isValid: true,
      },
      formIsValid: true,
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true
      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }
      if (this.guests.adults.val === '') {
        this.guests.adults.isValid = false
        this.formIsValid = false
      }
      if (this.guests.children.val === '') {
        this.guests.children.isValid = false
        this.formIsValid = false
      }
      if (this.phone.val === '') {
        this.phone.isValid = false
        this.formIsValid = false
      }
      if (this.dateFrom.val.length === 0) {
        this.dateFrom.isValid = false
        this.formIsValid = false
      }
      if (this.dateTo.val.length === 0) {
        this.dateTo.isValid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()
    
      if (!this.formIsValid) {
        return
      }

      const newReservation = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        guests: {
          adults: this.guests.adults.val,
          children: this.guests.children.val,
        },
        phoneNum: this.phone.val,
        dateFrom: this.dateFrom.val,
        dateTo: this.dateTo.val,
      }      
      
      this.$emit('save-data', newReservation)
    },
    clearValidity(input) {
      this[input].isValid = true
    },
    clearGuestValidity(type) {
      this.guests[type].isValid = true
    },
  },
}
</script>
