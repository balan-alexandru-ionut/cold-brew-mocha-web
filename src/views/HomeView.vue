<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const videoWall = document.querySelector('video')
  if (videoWall) {
    videoWall.playbackRate = 0.6
  }
})
</script>

<style scoped>
video {
  filter: grayscale(1) blur(1px);
}
</style>

<template>
  <main>
    <div class="hero">
      <video src="../assets/videos/2834010-hd_1920_1080_30fps.mp4" autoplay muted loop></video>
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-primary">
            <span class="text-secondary">Your budget,</span> but cooler
          </h1>
          <button class="btn btn-primary mt-8">Get Started</button>
        </div>
      </div>
    </div>
  </main>
</template>
