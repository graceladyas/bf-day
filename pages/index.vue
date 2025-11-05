<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300 relative font-nunito px-4"
  >
    <!-- Title -->
    <div class="text-center mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">🔒 LOCKED</h1>
      <p class="text-pink-500 text-sm sm:text-base">Enter the secret code 💌</p>
    </div>

    <!-- PIN dots -->
    <div class="flex justify-center gap-3 mb-6" :class="{ 'shake': wrongPin }">
      <div
        v-for="(dot, i) in 4"
        :key="i"
        class="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-pink-400 transition-all"
        :class="{ 'bg-pink-500': i < input.length }"
      ></div>
    </div>

    <!-- Wrong PIN message -->
    <transition name="fade">
      <span
        v-if="wrongPin"
        class="text-red-400 text-sm mb-4 animate-bounce text-center"
      >
        Oops! Lupak yak hmmmm 😝
      </span>
    </transition>

    <!-- Keypad -->
    <div class="grid grid-cols-3 gap-4 sm:gap-6">
      <button
        v-for="num in 9"
        :key="num"
        class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-pink-600 font-bold text-2xl sm:text-3xl shadow-md hover:scale-105 hover:bg-pink-50 transition transform active:scale-95"
        @click="press(num)"
      >
        {{ num }}
      </button>

      <!-- Empty space for alignment -->
      <div></div>

      <!-- 0 button -->
      <button
        class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-pink-600 font-bold text-2xl sm:text-3xl shadow-md hover:scale-105 hover:bg-pink-50 transition transform active:scale-95"
        @click="press(0)"
      >
        0
      </button>

      <!-- Delete button -->
      <button
        class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-pink-100 text-pink-600 font-bold text-xl sm:text-2xl shadow-md hover:scale-105 hover:bg-pink-200 transition transform active:scale-95"
        @click="deleteOne"
      >
        ⌫
      </button>
    </div>

    <!-- Unlock screen -->
    <transition name="fade">
      <div
        v-if="unlocked"
        class="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 text-pink-600 text-center p-6"
      >
        <h2 class="text-3xl sm:text-4xl font-bold animate-bounce">🎉 Unlocked! 🎉</h2>
        <p class="mt-3 text-base sm:text-lg">Welcome to Hendro’s Birthday Story 💖</p>
        <NuxtLink
          to="/born/new"
          class="mt-5 bg-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow hover:bg-pink-600 transition text-sm sm:text-base"
        >
          Masuk ke Cerita 🡢
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const input = ref('')
const unlocked = ref(false)
const wrongPin = ref(false)
const correctPin = '0923'

function press(num) {
  if (input.value.length < 4) {
    input.value += num
    if (input.value.length === 4) checkPin()
  }
}

function deleteOne() {
  if (input.value.length > 0) input.value = input.value.slice(0, -1)
}

function checkPin() {
  if (input.value === correctPin) {
    setTimeout(() => (unlocked.value = true), 300)
  } else {
    wrongPin.value = true
    input.value = ''
    setTimeout(() => (wrongPin.value = false), 1000)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}
.shake {
  animation: shake 0.3s;
}
</style>
