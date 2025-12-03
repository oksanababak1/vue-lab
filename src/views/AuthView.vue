<script setup lang="ts">
import { ref } from 'vue'

const isLogin = ref(true)
const username = ref('')
const password = ref('')
const email = ref('')
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-pink-400 to-pink-500 flex flex-col items-center justify-center p-6"
  >
    <!-- Логотип -->
    <div class="mb-8">
      <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
        <span class="text-5xl">❤️</span>
      </div>
    </div>

    <!-- Назва додатку -->
    <h1 class="text-white text-4xl font-bold mb-2">FATED</h1>

    <!-- Перемикач LOGIN / REGISTER -->
    <div class="flex gap-4 mb-8">
      <button
        @click="isLogin = true"
        :class="isLogin ? 'text-white border-b-2 border-white' : 'text-pink-200'"
        class="px-6 py-2 font-semibold"
      >
        LOGIN
      </button>
      <button
        @click="isLogin = false"
        :class="!isLogin ? 'text-white border-b-2 border-white' : 'text-pink-200'"
        class="px-6 py-2 font-semibold"
      >
        REGISTER
      </button>
    </div>

    <!-- Форма входу -->
    <div class="w-full max-w-sm space-y-4">
      <!-- Username -->
      <input
        v-model="username"
        type="text"
        placeholder="user name"
        class="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
      />

      <!-- Password -->
      <input
        v-model="password"
        type="password"
        placeholder="password"
        class="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
      />

      <!-- Email (тільки для реєстрації) -->
      <input
        v-if="!isLogin"
        v-model="email"
        type="email"
        placeholder="email"
        class="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-400"
      />

      <!-- Forgot Password -->
      <div v-if="isLogin" class="text-right">
        <a href="#" class="text-white text-sm">FORGOT PASSWORD?</a>
      </div>

      <!-- Кнопка LOGIN -->
      <button
        class="w-full py-3 bg-white text-pink-500 font-bold rounded-lg shadow-lg hover:bg-gray-50 transition"
      >
        LOGIN
      </button>

      <!-- Текст під кнопкою -->
      <div v-if="!isLogin" class="text-center text-white text-sm">
        <p>
          ALREADY HAVE AN ACCOUNT?
          <button @click="isLogin = true" class="font-bold underline">LOGIN</button>
        </p>
      </div>
    </div>
  </div>
</template>
