<script setup lang="ts"></script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>

<template>
  <nav class="navbar bg-primary backdrop-blur-sm">
    <RouterLink to="/" class="btn btn-ghost text-xl">Cold Brew</RouterLink>
  </nav>
</template>
