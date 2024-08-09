<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  let scrollLevel = -1
  const navbar = document.querySelector('nav')

  window.addEventListener('scroll', (e) => {
    window.scrollY > 0 ? (scrollLevel = 1) : (scrollLevel = 0)
  })

  setInterval(() => {
    if (navbar) {
      if (scrollLevel > 0) {
        scrollLevel = -1
        navbar.classList.remove('w-11/12', 'rounded-lg', 'my-6')
        return
      } else if (scrollLevel === 0) {
        scrollLevel = -1
        navbar.classList.add('w-11/12', 'rounded-lg', 'my-6')
      }
    }
  }, 100)
})
</script>

<style scoped>
html,
body,
main {
  background-color: black !important;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

<template>
  <nav
    class="navbar mx-auto my-6 flex w-11/12 justify-between rounded-lg bg-primary/70 backdrop-blur-md transition-all duration-500"
  >
    <RouterLink to="/" class="hover flex items-center justify-center text-2xl font-bold">
      <img src="../assets/logo.svg" class="h-14" />
      Cold Brew</RouterLink
    >
    <button
      class="btn border-none bg-primary/80 text-xl font-bold text-base-100 hover:bg-primary hover:text-base-100"
    >
      Login
    </button>
  </nav>
</template>
