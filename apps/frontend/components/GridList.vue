<script setup lang="ts">
  import type { ListViewItem } from '@monorepo/types'; 

  const props = defineProps<{
    items: ListViewItem[]
  }>();

</script>
<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="item in items" :key="item.id" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

<style scoped></style>
