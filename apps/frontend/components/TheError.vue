<script setup lang="ts">
  interface Props {
    title: string
    message: string
    actionable?: boolean
  }

  const { title="An Error Occurred", message="No more information is available at this time.", actionable = false } = defineProps<Props>()
</script>

<template>
  <Alert :title="title" :message="message" type="error" :actionable="actionable"></Alert>
</template>

<style scoped></style>
