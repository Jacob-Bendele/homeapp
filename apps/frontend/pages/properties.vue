<script setup lang="ts">
  import { ref } from 'vue';
  import { usePropertyStore } from '~/stores/property.store';
  import type { ListViewItem, Property } from '@monorepo/types'

  definePageMeta({
    layout: 'manager'  
  }) 

  // To tired to make progress
  // essentially useAsynData compoosable helpw tih double fetching
  // pinia actinos are suported here as seen below
  // does not raise an error but populates the error object to be checked
  // figrure a nice way to check and look at lazy data loading in order to do skeletons shimmering
  // paginatino with the update functino in asycdata fetch. 
  // computed urls with watchers to refetch

  const propertyStore = usePropertyStore()
  const { properties } = storeToRefs(propertyStore)
  const{ fetchProperties } = propertyStore
  const items = ref<ListViewItem<Property>[]>([])

  const { data, error, status } = await useAsyncData(
    'properties', 
    () => fetchProperties().then(() => true), // return truthy value for async handler avoid double fetching SSR.
    {
      lazy: true
    }
  )

  if (error.value) {
    console.error("Error fetching properties:", error.value);
  }
  else {
    items.value = Array.from(properties.value, (item, index) => ({id: index, data: item}))
  }
</script>

<template>
  <div>
    <!-- Remember the handling of the error is based on UseAsyncData composable catching errors and surfacing them without throwing -->
    <TheError v-if="error" message="This the issues" title="error ish" :actionable="true"></TheError>
    <div v-else-if="status === 'pending'">Loading...</div>
    <GridList v-else-if="items.length && status != 'pending'" :items="items">
      <template v-slot="slotProps">
        <PropertyCard :property="slotProps.item.data"></PropertyCard>
      </template>
    </GridList>
  </div>
</template>

<style scoped></style>
