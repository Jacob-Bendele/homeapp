<script setup lang="ts">
  import { computed } from 'vue';
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
  // const items = ref<ListViewItem<Property>[]>([])

  const { data: propertiesData, error, status } =  useAsyncData(
    'properties', 
    () => fetchProperties().then(() => true), // return truthy value for async handler avoid double fetching SSR.
    {
      lazy: true
    }
  )

  watchEffect(() => {
    if (error?.value) {
      console.error("Error fetching properties:", error.value)
    }
  })
  const items = computed<ListViewItem<Property>[]>(() => {
  if (propertiesData.value) {
    return Array.from(properties.value, (item, index) => ({id: index, data: item}))
  }
  return []
})
</script>

<template>
    <!-- Remember the handling of the error is based on UseAsyncData composable catching errors and surfacing them without throwing -->
    <TheError v-if="error" message="This the issues" title="error ish" :actionable="true"></TheError>
    <SkeletonWrapper :is-loading="status === 'pending'">
      <template #skeleton>
        <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
        </div>
      </template>
      <template>
        <GridList v-if="items.length" :items="items">
          <template v-slot="slotProps">
            <PropertyCard :property="slotProps.item.data"></PropertyCard>
          </template>
        </GridList>
      </template>
    </SkeletonWrapper>
</template>

<style scoped></style>
