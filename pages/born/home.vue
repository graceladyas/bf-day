<template>
  <div class="relative font-nunito overflow-hidden min-h-screen bg-pink-50 flex flex-col justify-center items-center text-center p-6">
    <!-- Falling Hearts -->
    <div class="absolute w-full h-full pointer-events-none overflow-hidden">
      <div
        v-for="n in 50"
        :key="n"
        class="falling-heart text-pink-400 absolute"
        :style="{
          left: `${Math.random() * 100}%`,
          fontSize: `${12 + Math.random() * 18}px`,
          animationDuration: `${5 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          top: `-${Math.random() * 200}px`
        }"
      >❤️</div>
    </div>

    <!-- Disclaimer Text -->
    <h1 class="text-4xl font-bold text-pink-600 mb-4 animate-pulse">Disclaimer!!! ⚠️</h1>
    <p class="text-lg text-pink-700 max-w-xl mb-6">
      Website ini dibuat dengan penuh cinta dan coding khusus untukmu 💕<br>
      Ingat ya, pacarmu ini seorang Software Engineer, jadi hati-hati wkwk 😝
    </p>

    <!-- Button to Story -->
    <NuxtLink 
      to="/born/baby" 
      class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105 animate-bounce">
      Aku ada cerita baby, mau baca ga :''
    </NuxtLink>
  </div>
</template>

<style>
@keyframes fall {
  0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}
.falling-heart {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-pulse { animation: pulse 2s infinite; }
</style>
