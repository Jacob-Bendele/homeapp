<script setup lang="ts">
  import { ref } from 'vue';
  import { useMockDataStore } from '@/stores/mockData';
  import type { ListViewItem, Property } from '@monorepo/types'

  definePageMeta({
    layout: 'manager'  
  }) 

  const mockDataStore = useMockDataStore() 
  const { data, error } = await useAsyncData('properties', () => mockDataStore.fetchProperties())
  const parsed = Array.from(data.value, (item, index) => ({id: index, data: item}))
  const items = ref<ListViewItem<Property>[]>(parsed)


</script>

<template>
  <GridList :items="items">
    <template v-slot="slotProps">
      <PropertyCard :property="slotProps.item.data"></PropertyCard>
    </template>
  </GridList>
</template>

<style scoped></style>
