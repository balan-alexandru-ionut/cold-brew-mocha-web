<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const videoWall = document.querySelector('video')
  if (videoWall) {
    videoWall.playbackRate = 0.65
  }
})
</script>

<style scoped>
video {
  filter: brightness(0.5);
}
</style>

<template>
  <main>
    <div class="hero min-h-screen">
      <video
        class="min-h-full min-w-full object-cover"
        src="../assets/videos/wallvideo.mp4"
        autoplay
        muted
      ></video>
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
