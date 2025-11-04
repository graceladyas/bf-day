<template>
  <div class="relative font-nunito overflow-hidden">

    <!-- Falling Hearts -->
    <div class="absolute w-full h-full pointer-events-none overflow-hidden">
      <div v-for="n in 30" :key="n" class="falling-heart text-pink-400 absolute" 
           :style="{
             left: `${Math.random() * 100}%`,
             animationDuration: `${5 + Math.random() * 5}s`,
             fontSize: `${12 + Math.random() * 18}px`,
             top: `-${Math.random() * 100}px`
           }">❤️</div>
    </div>

    <!-- Disclaimer Section -->
    <section class="flex flex-col justify-center items-center min-h-screen bg-pink-50 text-center p-6 animate-fadeIn">
      <h1 class="text-4xl font-bold text-pink-600 mb-4 animate-pulse">Disclaimer!!! ⚠️</h1>
      <p class="text-lg text-pink-700 max-w-xl mb-6">
        Website ini dibuat dengan penuh cinta dan coding khusus sayangkuu 💕
        
      </p>
      <small class="text-pink-700"> Ingat ya, ur GF is a Software Engineer wkwk 😝 </small><br><br>
      <!-- <button @click="scrollToSection('section1')" 
              class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105">
        Masuk ke Cerita 🡢
      </button> -->
      <NuxtLink 
  to="/born/love" 
  class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105">
  Aku ada cerita baby.....
</NuxtLink>
    </section>

    <!-- Section 1 – Awal Cerita -->
    <!-- <section id="section1" class="flex flex-col justify-center items-center min-h-screen bg-pink-100 text-center p-6 animate-fadeIn">
      <h1 class="text-5xl font-pacifico text-pink-600 mb-4 animate-bounce">Once Upon a Time...</h1>
      <p class="text-lg text-pink-700 mb-6 max-w-xl">
        Pada suatu waktu, di hari yang indah, tanggal 7 November 1996, lahirlah seorang bayi kecil yang kelak jadi orang paling spesial dalam hidupku 💫.  
        Namanya Hendro Anto Ferdinan Silitonga — tapi bagiku, dia adalah “Sayang” 💖.
      </p>
      <button @click="scrollToSection('section2')" 
              class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105">
        Next 🡢
      </button>
    </section> -->

    <!-- ... rest of your sections ... -->

  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
/* Falling hearts animation (like snow) */
@keyframes fall {
  0% { transform: translateY(-50px) rotate(0deg); opacity: 0.8; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
}
.falling-heart {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Fade in animation for sections */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

/* Pulse animation for headings */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
