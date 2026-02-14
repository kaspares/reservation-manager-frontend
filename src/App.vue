<template>
  <div data-theme="dracula">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components: {
    TheHeader,
  },
  created() {
    this.$store.dispatch('tryLogin')
  }
}
</script>

<style scoped></style>
