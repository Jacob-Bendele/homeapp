<script setup lang="ts">
  import { computed } from 'vue';
  import type { Property } from '@monorepo/types';
  import { HomeModernIcon } from '@heroicons/vue/24/outline'
  import {formatAddress} from 'localized-address-format';  
  const props = defineProps<{
    property: Property 
  }>();

  const formattedAddress = computed(() => {
    return formatAddress({
      postalCountry: props.property.address.country,
      administrativeArea: props.property.address.state || props.property.address.province,
      locality: props.property.address.city,
      postalCode: props.property.address.postalCode,
      name: props.property.address.buildingName || '',
      addressLines: [props.property.address.streetAddress1]
    }).join('\n')
  })
</script>

<template>
  <HorizontalCard>
    <template #header>
      <img v-if="property.images.length" class="h-12 w-12 rounded-full" :src="property.images[0].url" alt="" />

      <HomeModernIcon v-else class="h-10 w-10 rounded-full"></HomeModernIcon>
    </template>
    <template #content>
      <a href="#" class="focus:outline-none">
        <span class="absolute inset-0" aria-hidden="true" />
        <p class="text-md font-medium text-gray-900">{{ property.name }}</p>
        <p class="text-sm font-medium text-gray-900">{{ formattedAddress }}</p>
        <p class="truncate text-sm text-gray-500">{{ property.type }}</p>
        <Badge text="↑20%" color="green"></Badge>
      </a>
    </template>
  </HorizontalCard>
</template>

<style scoped></style>
