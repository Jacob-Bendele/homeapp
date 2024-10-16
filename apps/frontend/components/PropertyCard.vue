<script setup lang="ts">
  import { computed } from 'vue';
  import type { Property } from '@monorepo/types';
  import { HomeModernIcon } from '@heroicons/vue/24/outline'
  
  const props = defineProps<{
    property: Property 
  }>();

  const addressMessage = computed(() => {
    return 
  })
  // Computed property for the address/location
  // IF large enough view show some nice infographics of current vs upcoming rent
  // Maybe highlight a photo of the property if it has any
  // Fall back picture if none
  // Stats to show should be configurable maybe
    // Consist of 
  // need unified size not based on content sizeingin and mobile friendly.
  // use badges for color and organization of information as opposed to just text 
  

</script>

<template>
  <HorizontalCard>
    <template #header>
      <img v-if="property.images.length" class="h-10 w-10 rounded-full" :src="property.images[0].url" alt="" />
      <HomeModernIcon v-else class="h-10 w-10 rounded-full"></HomeModernIcon>
    </template>
    <template #content>
      <a href="#" class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true" />
        <p class="text-sm font-medium text-gray-900">{{ property.address }}</p>
        <p class="truncate text-sm text-gray-500">{{ property.type }}</p>
      </a>
    </template>
  </HorizontalCard>
</template>

<style scoped></style>
