<script setup lang="ts"></script>

<template>
    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <slot name="menu-button"></slot>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <slot name="search"></slot>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <slot name="action-button"></slot>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />
            <slot name="user-profile"></slot>            
          </div>
        </div>
      </div>
</template>

<style scoped></style>
