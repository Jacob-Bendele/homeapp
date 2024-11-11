<script setup lang="ts">
  import { computed } from 'vue'
  import type { PropType } from 'vue';
  const props = defineProps({
    color: {
      type: String as PropType<string>,
      required: true,
      validator: (value: string) => {
        const tailwindColors = [
          'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 
          'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 
          'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
        ]
        return tailwindColors.includes(value)
      }
    },
    text: {
      type: String as PropType<string>,
      required: true,
    }
  })


  function titleCase(str: any) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  const dynamicColorClass = computed(() => ({
    [`bg-${props.color}-50`]: true,
    [`text-${props.color}-700`]: true,
    [`ring-${props.color}-600/10`]: true
  }))

  const formattedText = computed(() => {
    return titleCase(props.text.replace('_', ' '))
  })

</script>

<template>
    <span :class="dynamicColorClass" class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset">{{ text }}</span>
</template>

<style scoped>
  /* TailwindCSS Safety Classes */
  /*
    bg-slate-50 text-slate-700 ring-slate-600/10
    bg-gray-50 text-gray-700 ring-gray-600/10
    bg-zinc-50 text-zinc-700 ring-zinc-600/10
    bg-neutral-50 text-neutral-700 ring-neutral-600/10
    bg-stone-50 text-stone-700 ring-stone-600/10
    bg-red-50 text-red-700 ring-red-600/10
    bg-orange-50 text-orange-700 ring-orange-600/10
    bg-amber-50 text-amber-700 ring-amber-600/10
    bg-yellow-50 text-yellow-700 ring-yellow-600/10
    bg-lime-50 text-lime-700 ring-lime-600/10
    bg-green-50 text-green-700 ring-green-600/10
    bg-emerald-50 text-emerald-700 ring-emerald-600/10
    bg-teal-50 text-teal-700 ring-teal-600/10
    bg-cyan-50 text-cyan-700 ring-cyan-600/10
    bg-sky-50 text-sky-700 ring-sky-600/10
    bg-blue-50 text-blue-700 ring-blue-600/10
    bg-indigo-50 text-indigo-700 ring-indigo-600/10
    bg-violet-50 text-violet-700 ring-violet-600/10
    bg-purple-50 text-purple-700 ring-purple-600/10
    bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-600/10
    bg-pink-50 text-pink-700 ring-pink-600/10
    bg-rose-50 text-rose-700 ring-rose-600/10
  */

</style>