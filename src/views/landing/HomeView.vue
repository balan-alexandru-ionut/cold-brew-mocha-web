<script setup lang="ts">
import FeaturesTimeline from '@/components/FeaturesTimeline.vue'
import VideoWall from '@/components/VideoWall.vue'
import { FeatureItem, TimelineDisplaySide } from '@/types/FeatureItem'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons'

const trackSavingsFeature = FeatureItem.builder(
  'Track your savings',
  'v1.0.0',
  TimelineDisplaySide.start
)
  .description('Track your savings with ease across multiple wallets')
  .icon(faPiggyBank)
  .implemented(true)
  .build()

const trackSavingsFeature2 = FeatureItem.builder(
  'Track your savings',
  'v1.0.0',
  TimelineDisplaySide.end
)
  .description('Track your savings with ease across multiple wallets')
  .implemented(false)
  .build()

const timelineFeatures = [trackSavingsFeature, trackSavingsFeature2]
</script>

<template>
  <main>
    <VideoWall video-source="wallvideo.mp4" />
    <FeaturesTimeline :feature-timeline-items="timelineFeatures" />
  </main>
</template>
