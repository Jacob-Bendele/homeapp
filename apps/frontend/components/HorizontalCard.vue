<script setup lang="ts">
</script>

<template>
  <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
    <div class="flex-shrink-0">
      <slot name="header"></slot>
    </div>
    <div class="min-w-0 flex-1">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped></style>
