<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  let scrollLevel = -1
  const navbar = document.querySelector('nav')

  window.addEventListener('scroll', (e) => {
    window.scrollY > 10 ? (scrollLevel = 1) : (scrollLevel = 0)
  })

  setInterval(() => {
    if (navbar) {
      if (scrollLevel > 0) {
        scrollLevel = -1
        navbar.classList.remove('w-11/12', 'rounded-lg', 'mt-6')
        return
      } else if (scrollLevel === 0) {
        scrollLevel = -1
        navbar.classList.add('w-11/12', 'rounded-lg', 'mt-6')
      }
    }
  }, 100)
})
</script>

<template>
  <nav
    class="navbar sticky top-0 z-10 mx-auto mt-6 flex w-11/12 justify-between rounded-lg bg-primary/70 backdrop-blur-md transition-all duration-500"
  >
    <RouterLink to="/" class="hover flex items-center justify-center text-xl font-bold">
      <img src="../assets/logo.svg" class="h-12" />
      Cold Brew</RouterLink
    >
    <RouterLink
      :to="{ name: 'authenticate', params: { action: 'login' } }"
      class="btn border-none bg-primary/85 text-lg font-bold text-base-100 hover:bg-primary hover:text-base-100"
    >
      Login
    </RouterLink>
  </nav>
</template>
