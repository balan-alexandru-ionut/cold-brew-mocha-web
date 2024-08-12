<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  videoSource: String
})

onMounted(() => {
  const videoWall = document.querySelector('video')
  if (videoWall) {
    videoWall.playbackRate = 0.65
  }
})

function getVideoUrl(): URL {
  return new URL(`../assets/videos/${props.videoSource}`, import.meta.url)
}
</script>

<template>
  <div class="hero -mt-16 min-h-screen">
    <video
      class="min-h-full min-w-full object-cover brightness-50"
      :src="getVideoUrl().toString()"
      autoplay
      muted
    ></video>
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-primary">
          <span class="text-secondary">Your budget,</span> but cooler
        </h1>
        <RouterLink
          :to="{ name: 'authenticate', params: { action: 'signup' } }"
          class="btn btn-primary mt-8"
          >Get Started</RouterLink
        >
      </div>
    </div>
  </div>
</template>
