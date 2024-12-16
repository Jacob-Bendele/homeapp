<script setup>
</script>

<template>
  <NuxtLayout>
    <NuxtErrorBoundary>
      <template #error="{ error }">
        <p>This is the error {{ error.message }}</p>
      </template>
      <NuxtPage></NuxtPage>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>
