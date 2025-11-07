<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen relative font-nunito px-4"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <div class="z-10 relative flex flex-col items-center justify-center">
        
        <div class="text-center mb-8">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">🔒 LOCKED</h1>
          <p class="text-white/80 text-sm sm:text-base">Enter the secret code</p>
          <p class="text-white/80 italic text-xs xs:text-base">Cluenya tanggal dan tahunnya kita</p>
        </div>

        <div class="flex justify-center gap-3 mb-6" :class="{ 'shake': wrongPin }">
          <div
            v-for="(dot, i) in 4"
            :key="i"
            class="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-white/60 transition-all"
          >
            <div
              v-if="i < input.length"
              class="bg-white w-full h-full rounded-full"
            ></div>
          </div>
        </div>

        <transition name="fade">
          <span
            v-if="wrongPin"
            class="text-red-400 text-sm mb-4 animate-bounce text-center"
          >
            Oops! Lupa Yak 😝
          </span>
        </transition>

        <div class="grid grid-cols-3 gap-4 sm:gap-6">
          <button
            v-for="num in 9"
            :key="num"
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 text-white font-bold text-2xl sm:text-3xl shadow-md backdrop-blur-md hover:scale-105 hover:bg-white/50 transition transform active:scale-95"
            @click="press(num)"
          >
            {{ num }}
          </button>

          <div></div>

          <button
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 text-white font-bold text-2xl sm:text-3xl shadow-md backdrop-blur-md hover:scale-105 hover:bg-white/50 transition transform active:scale-95"
            @click="press(0)"
          >
            0
          </button>

          <button
            class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 text-white font-bold text-xl sm:text-2xl shadow-md backdrop-blur-md hover:scale-105 hover:bg-white/40 transition transform active:scale-95"
            @click="deleteOne"
          >
            ⌫
          </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 1. Import the router
import { useRouter } from 'vue-router' // or 'nuxt/app' if using Nuxt 3

const input = ref('')
const wrongPin = ref(false)
// const correctPin = '0923'
const correctPin = '8998'
const router = useRouter() // 2. Initialize router

// Press number
function press(num) {
  if (input.value.length < 4) {
    input.value += num
    if (input.value.length === 4) checkPin()
  }
}

// Delete last
function deleteOne() {
  if (input.value.length > 0) input.value = input.value.slice(0, -1)
}

// Check PIN
function checkPin() {
  if (input.value === correctPin) {
    // 3. Navigate to the new page instead of setting 'unlocked' to true
    router.push('/born/first') 
  } else {
    wrongPin.value = true
    input.value = ''
    setTimeout(() => (wrongPin.value = false), 1000)
  }
}
</script>

<style scoped>
/* (Styles remain the same) */
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
button, input {
  font-size: 16px;
  touch-action: manipulation;
}
</style>