<template>
  <div>
    <slot v-if="isLoading" name="skeleton"></slot>
    <slot v-else></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    isLoading: boolean
  }>()
</script>
