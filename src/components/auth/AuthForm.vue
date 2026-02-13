<template>
    <form @submit.prevent="submitForm">
        <div class="min-h-screen bg-base-300 flex items-center justify-center p-4">
          <div class="card w-full max-w-md bg-base-100 shadow-xl">
            <div class="card-body gap-6 m-8">
              <h2 class="card-title justify-center text-4xl">Login</h2>
              <label class="floating-label">
                <input class="input validator" type="email" required placeholder="mail@site.com" v-model="email" />
              </label>
               <label class="floating-label">
                <input
                  type="password"
                  placeholder="Password"
                  class="input input-md"
                  v-model="password"
                />
                <span>Password</span>
              </label>
                <div class="card-actions justify-start pt-2">
                  <button class="btn btn-primary w-30" type="submit">Login</button>
                </div>
            </div>
            <p :show="!!error"> {{ error }}</p>
          </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
        async submitForm() {
        const payload = {
            email: this.email,
            password: this.password
        }

         try{
            await this.$store.dispatch('auth', payload)
            
            this.$router.replace('/reservations')

         }
         catch(err) {
            this.error = err.message || 'Failed to authenticate, try later'
         }
        }
    }
}
</script>