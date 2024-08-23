<script setup lang="ts">
import { FeatureItem, TimelineDisplaySide } from '@/types/FeatureItem'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'

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

const implementedTitleClass = computed(() => ({
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
    <div class="timeline-middle mb-2 text-primary">
      <FontAwesomeIcon
        v-if="featureTimelineItem.implemented"
        :icon="featureTimelineItem.icon"
        :class="implementedIconClass"
        class="fa-lg"
      />
      <span v-else class="loading loading-ring loading-md"></span>
    </div>
    <div :class="timelineItemClasses" class="mb-10 mt-2 text-primary">
      <span class="font-mono italic">{{ featureTimelineItem.publishedInVersion }}</span>
      <h4 :class="implementedTitleClass" class="text-lg font-black">
        {{ featureTimelineItem.title }}
      </h4>
      <p>{{ featureTimelineItem.description }}</p>
    </div>
    <hr :class="implementedHrClass" />
  </li>
</template>
