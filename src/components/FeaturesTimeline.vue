<script setup lang="ts">
import { TimelineDisplaySide, type FeatureItem } from '@/types/FeatureItem'
import FeatureTimelineItem from './FeatureTimelineItem.vue'

const props = defineProps<{
  featureTimelineItems: Array<FeatureItem>
}>()

props.featureTimelineItems.forEach((item, index) => {
  index % 2 === 0
    ? (item.timelineDisplaySide = TimelineDisplaySide.start)
    : (item.timelineDisplaySide = TimelineDisplaySide.end)
})
</script>

<template>
  <ul class="timeline timeline-vertical timeline-snap-icon">
    <FeatureTimelineItem
      v-for="featureTimelineItem in featureTimelineItems"
      :feature-timeline-item="featureTimelineItem"
    />
  </ul>
</template>
