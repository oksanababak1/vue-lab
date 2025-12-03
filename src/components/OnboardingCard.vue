<script setup lang="ts">
defineProps<{
  title: string
  description: string
  illustration: string
  bgColor: string
}>()
</script>

<template>
  <div class="flex flex-col items-center justify-between h-screen p-8" :class="bgColor">
    <!-- Ілюстрація -->
    <div class="flex-1 flex items-center justify-center">
      <div class="w-64 h-64 flex items-center justify-center text-6xl">
        {{ illustration }}
      </div>
    </div>

    <!-- Текстовий контент -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold mb-4 text-gray-800">
        {{ title }}
      </h2>
      <p class="text-gray-600 text-lg px-4">
        {{ description }}
      </p>
    </div>

    <!-- Індикатори прогресу -->
    <div class="flex gap-2 mb-6">
      <div class="w-2 h-2 rounded-full bg-pink-400"></div>
      <div class="w-2 h-2 rounded-full bg-gray-300"></div>
      <div class="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>

    <!-- Кнопка Skip -->
    <button class="text-gray-500 mb-4">SKIP</button>
  </div>
</template>
