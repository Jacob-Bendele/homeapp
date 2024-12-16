<template>
  <div :class="{'bg-green-50': type === 'success', 'bg-blue-50': type === 'info', 'bg-yellow-50': type === 'warning', 'bg-red-50': type === 'error'}" class="rounded-md p-4">
    <div class="flex">
      <!-- Icon -->
      <div class="shrink-0">
        <InformationCircleIcon v-if="type === 'info'" :class="{'text-blue-400': type === 'info'}" class="size-5" aria-hidden="true" />
        <CheckCircleIcon v-else-if="type === 'success'" :class="{'text-green-400': type === 'success'}" class="size-5" aria-hidden="true" />
        <ExclamationTriangleIcon v-else-if="type === 'warning'" :class="{'text-yellow-400': type === 'warning'}" class="size-5" aria-hidden="true" />
        <ExclamationCircleIcon v-else-if="type === 'error'"  :class="{'text-red-400': type === 'error'}" class="size-5" aria-hidden="true" />
      </div>
      <!-- Message -->
      <div class="ml-3">
        <h3 v-if="title" :class="{'text-green-800': type === 'success', 'text-blue-800': type === 'info', 'text-yellow-800': type === 'warning', 'text-red-800': type === 'error'}" class="text-sm font-medium">{{ title }}</h3>
        <div :class="{'text-green-700': type === 'success', 'text-blue-700': type === 'info', 'text-yellow-700': type === 'warning', 'text-red-700': type === 'error'}" class="mt-2 text-sm">
          <p>{{ message }}</p>
        </div>
        <!-- Actions -->
        <div v-if="actionable" class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" :class="actionStyle" class="rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2">{{ actionDetails[type].text }}</button>
            <button type="button" :class="actionStyle" class="ml-3 rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/vue/20/solid'

  const emit = defineEmits<{
    action: [id: number]
  }>()

  interface Props {
    title: string
    message: string
    type?: string
    actionable?: boolean
  }

  const { title = 'Attention Needed', message = "This is an alert.", type="info", actionable=false} = defineProps<Props>()  

  const actionStyle = computed(() => ({'bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50': type === 'info',
    'bg-green-50 text-green-800 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50':  type === 'success',
    'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50':  type === 'warning',
    'bg-red-50 text-red-800 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50':  type === 'error'
  }))
  // TODO: add actions object to the actionDetails, passing in handlers? or just emitting the id of the action
  const actionDetails = computed(() => ({
    info: {
      text: 'See Details',
      actions: []
    },
    success: {
      text: 'View Status',
      actions: []
    },
    warning: {
      text: 'Take Action',
      actions: []
    },
    error: {
      text: 'See Error',
      actions: []
    }
  }))

</script>

<style scoped>
  /* 
  Tailwind classes used dynamically in this component:
  bg-yellow-50
  text-yellow-400
  text-yellow-700
  text-yellow-800

  Actions
  bg-green-100
  bg-red-100
  */
</style>