<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  action: 'login' | 'signup'
}>()

let localAction = ref(props.action)

let cardTitle = computed(() => {
  if (localAction.value === 'login') {
    return 'Welcome back!'
  }

  return 'Nice to meet you!'
})

function toggleAction() {
  localAction.value === 'login' ? (localAction.value = 'signup') : (localAction.value = 'login')
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div
    class="card absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 bg-primary text-secondary-content md:w-2/3"
  >
    <div class="card-body items-center p-2 text-center">
      <img src="../../assets/logo.svg" class="w-16" />
      <h2 class="card-title" id="auth-card-title">{{ cardTitle }}</h2>
      <div class="divider"></div>
      <Transition name="slide-fade" mode="out-in">
        <div class="w-full" v-if="localAction === 'signup'">
          <SignupForm @change-to-login="toggleAction()" />
        </div>
        <div class="w-full" v-else-if="localAction === 'login'">
          <LoginForm @change-to-signup="toggleAction()" />
        </div>
      </Transition>
    </div>
  </div>
</template>
