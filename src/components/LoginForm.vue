<script setup lang="ts">
defineEmits(['changeToSignup'])
</script>

<template>
  <form class="w-full">
    <div class="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Email"
        autocomplete="email"
        class="input input-bordered w-full bg-primary text-base-100"
      />

      <input
        type="password"
        placeholder="Password"
        autocomplete="new-password"
        class="input input-bordered w-full bg-primary text-base-100"
      />
    </div>
  </form>
  <div class="divider mb-0"></div>
  <div class="flex w-full flex-col content-between justify-between md:flex-row-reverse">
    <button
      class="btn border-0 bg-base-100 text-lg text-primary drop-shadow-lg hover:bg-secondary hover:text-primary"
    >
      Login
    </button>
    <button @click="$emit('changeToSignup')" class="btn btn-link text-secondary">
      Don't have an account yet?
    </button>
  </div>
</template>
