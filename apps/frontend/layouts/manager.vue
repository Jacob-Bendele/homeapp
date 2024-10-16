<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div>
    <TheSideBar :navigation="sidebarConfig" v-model:open="sidebarOpen"></TheSideBar>
    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <BaseButton type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </BaseButton>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <TheSearchBar place-holder="Search..." />
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <BaseButton type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </BaseButton>
            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

            <!-- Profile dropdown -->
            <ProfileDropDown :user-navigation="userNavigation"/>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
      Bars3Icon,
      BellIcon
  } from '@heroicons/vue/24/outline'
  import {  sidebarConfig, userNavigation } from '@monorepo/config'
  //console.log(sidebarConfig)
  // const navigation = [
  //   { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  //   { name: 'Team', href: '#', icon: UsersIcon, current: false },
  //   { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  //   { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  //   { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  //   { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
  // ]
  // const teams = [
  //   { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  //   { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  //   { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  // ]
  // const userNavigation = [
  //   { name: 'Your profile', href: '#' },
  //   { name: 'Sign out', href: '#' },
  // ]
  
  const sidebarOpen = ref(false)
</script>