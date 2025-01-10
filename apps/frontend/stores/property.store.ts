import { defineStore } from 'pinia';
import type { Property } from '@monorepo/types/property'


export const usePropertyStore = defineStore('property', () => {
    const runtimeConfig = useRuntimeConfig()
    const isLoading = ref(false)
    const error = ref(null)
    const properties = ref<Property[]>([])
    const count = ref(0)

    async function fetchProperties(){
        isLoading.value = true
        // TODO: make this path with path to avoid the trailing slash issues of this.
        const delay = (ms:number) => new Promise(resolve => setTimeout(resolve, ms));

        // Add an artificial delay (e.g., 1000ms or 1 second)
        await delay(4000);
        const response: Property[] = await $fetch(`${runtimeConfig.public.apiBase}properties`)
        properties.value = response
        isLoading.value = false    
    }

    return { properties, isLoading, error, count, fetchProperties }
})
