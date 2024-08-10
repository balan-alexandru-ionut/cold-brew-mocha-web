<script setup lang="ts">
import type { FeatureItem } from '@/types/FeatureItem'
import FeatureTimelineItem from './FeatureTimelineItem.vue'

defineProps<{
  featureTimelineItems: Array<FeatureItem>
}>()
</script>

<template>
  <ul class="timeline timeline-vertical timeline-snap-icon">
    <FeatureTimelineItem
      v-for="featureTimelineItem in featureTimelineItems"
      :feature-timeline-item="featureTimelineItem"
    />
  </ul>
</template>
