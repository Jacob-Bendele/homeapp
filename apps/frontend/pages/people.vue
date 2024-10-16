<script setup lang="ts">
  import { ref } from 'vue';
  import type { ListViewItem } from '@monorepo/types'
  definePageMeta({
    layout: 'manager'  
  }) 

  const items = ref<ListViewItem<string>[]>(
    [{id: 1, data: "hello" }, {id: 2, data: "there" }]
  )
</script>

<template>
  <GridList :items="items">
    <template v-slot="data">
      <p>{{ data.item.id }} {{ data.item.data }}</p>
    </template>
  </GridList>
</template>

<style scoped></style>
