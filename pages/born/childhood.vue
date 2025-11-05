<template>
  <div class="min-h-screen flex flex-col items-center justify-start px-4 pt-8 font-nunito relative">

    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 w-full flex flex-col items-center">
        
        <br><br><br><br>
        <h1 class="text-3xl font-bold text-white mb-6 text-center shadow-lg">🎉 Dashboard 🎉</h1>

        <br><br><br><br>

        <div class="grid grid-cols-2 gap-4 w-full max-w-xs">
          <!-- <button @click="currentSection='childhood'"  -->
          <!-- <button  @click="/born/childhood"
                  class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition">
            <span class="text-3xl mb-1">🧸</span>
            <span class="text-sm text-white">Childhood</span>
          </button> -->

          <NuxtLink 
            to="/born/new"
            class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
          >
            <span class="text-3xl mb-1">🧸</span>
            <span class="text-sm text-white">Childhood</span> 
          </NuxtLink>

          <button @click="currentSection='message'" 
                  class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition">
            <span class="text-3xl mb-1">🥳</span>
            <span class="text-sm text-white">Message</span>
          </button>

          <button @click="currentSection='emojis'" 
                  class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition">
            <span class="text-3xl mb-1">🎈</span>
            <span class="text-sm text-white">Emojis</span>
          </button>

          <button @click="currentSection='music'" 
                  class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition">
            <span class="text-3xl mb-1">🎵</span>
            <span class="text-sm text-white">Music</span>
          </button>
        </div>

        <div v-if="currentSection" class="mt-6 w-full max-w-xs p-4 bg-white/30 rounded-xl shadow-2xl relative backdrop-blur-md text-gray-800">
          <button @click="currentSection=''" class="absolute top-2 right-2 text-red-600 font-bold hover:text-red-700">✕</button>

          <div v-if="currentSection==='childhood'" class="text-center">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">🧸 Childhood Memories</h3>
            <p class="text-gray-800">A glimpse of your childhood days… smiles and little adventures! 🎂</p>
          </div>

          <div v-if="currentSection==='message'" class="text-center">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">🥳 Birthday Wishes</h3>
            <p class="text-gray-800">Wishing you endless happiness, smiles, and love on your special day! 💖</p>
          </div>

          <div v-if="currentSection==='emojis'" class="relative h-48 overflow-hidden">
            <div class="absolute top-10 left-10 text-3xl animate-bounce text-yellow-500">🎈</div>
            <div class="absolute top-16 right-16 text-4xl animate-bounce text-yellow-500">🎈</div>
            <div class="absolute bottom-20 left-16 text-3xl animate-pulse text-pink-500">🎁</div>
            <div v-for="i in 15" :key="i" class="absolute text-2xl text-yellow-500"
                 :style="{ top: Math.random()*150+'px', left: Math.random()*150+'px', transform:'rotate('+Math.random()*360+'deg)'}">✨</div>
          </div>

          <div v-if="currentSection==='music'" class="text-center">
            <h3 class="text-xl font-semibold text-blue-700 mb-2">🎵 Background Music</h3>
            <audio ref="music" loop>
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
            </audio>
            <button @click="toggleMusic" class="mt-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg">
              {{ isMusicPlaying ? 'Pause 🔇' : 'Play 🔊' }}
            </button>
          </div>

        </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentSection = ref('')
const music = ref(null)
const isMusicPlaying = ref(false)

function toggleMusic() {
  if (!music.value) music.value = document.querySelector('audio')
  if (isMusicPlaying.value) {
    music.value.pause()
    isMusicPlaying.value = false
  } else {
    music.value.play()
    isMusicPlaying.value = true
  }
}
</script>

<style scoped>
@keyframes bounceCustom {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-bounce { animation: bounceCustom 2s infinite; }

@keyframes pulseCustom {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
.animate-pulse { animation: pulseCustom 1.5s infinite; }
</style>