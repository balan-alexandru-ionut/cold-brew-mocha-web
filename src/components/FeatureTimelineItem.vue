<script setup lang="ts">
import { FeatureItem, TimelineDisplaySide } from '@/types/FeatureItem'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'

const props = defineProps<{
  featureTimelineItem: FeatureItem
}>()

const timelineItemClasses = computed(() => ({
  'timeline-start': props.featureTimelineItem.timelineDisplaySide === TimelineDisplaySide.start,
  'timeline-end': props.featureTimelineItem.timelineDisplaySide === TimelineDisplaySide.end,
  'text-end': props.featureTimelineItem.timelineDisplaySide === TimelineDisplaySide.start
}))

const implementedIconClass = computed(() => ({
  'text-secondary': props.featureTimelineItem.implemented,
  'text-primary': !props.featureTimelineItem.implemented
}))

const implementedHrClass = computed(() => ({
  'bg-secondary': props.featureTimelineItem.implemented,
  'bg-primary': !props.featureTimelineItem.implemented
}))
</script>

<template>
  <li>
    <div class="timeline-middle text-primary">
      <FontAwesomeIcon :icon="featureTimelineItem.icon" :class="implementedIconClass" />
    </div>
    <div :class="timelineItemClasses" class="mb-10 text-primary">
      <span class="font-mono italic">{{ featureTimelineItem.publishedInVersion }}</span>
      <h4 :class="implementedIconClass" class="text-lg font-black">
        {{ featureTimelineItem.title }}
      </h4>
      <p>{{ featureTimelineItem.description }}</p>
    </div>
    <hr :class="implementedHrClass" />
  </li>
</template>
