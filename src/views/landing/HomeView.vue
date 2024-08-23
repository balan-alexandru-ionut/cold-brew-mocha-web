<script setup lang="ts">
import FeaturesTimeline from '@/components/FeaturesTimeline.vue'
import VideoWall from '@/components/VideoWall.vue'
import { featureItems } from '@/static-data/feature-items'
</script>

<template>
  <main>
    <VideoWall video-source="wallvideo.mp4" />
    <FeaturesTimeline :feature-timeline-items="featureItems" />
  </main>
</template>
