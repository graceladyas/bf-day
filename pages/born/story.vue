<template>
  <div class="relative min-h-screen bg-purple-50 flex flex-col justify-center items-center p-6 text-center overflow-hidden">
    <!-- Floating sparkles -->
    <div class="absolute w-full h-full pointer-events-none">
      <div v-for="n in 50" :key="n" class="falling-heart text-pink-300 absolute"
           :style="{
             left: `${Math.random() * 100}%`,
             fontSize: `${10 + Math.random() * 14}px`,
             animationDuration: `${4 + Math.random() * 4}s`,
             animationDelay: `${Math.random() * 5}s`,
             top: `-${Math.random() * 150}px`
           }">✨</div>
    </div>

    <h1 class="text-5xl font-pacifico text-purple-600 mb-4 animate-pulse">Sweet Messages 💌</h1>
    <p class="text-purple-700 max-w-xl mb-6 animate-fadeIn">
      Sayangku, setiap detik bersamamu adalah kebahagiaan.  
      Kamu selalu bikin aku tersenyum, bahkan di hari tersulitku 💖.
    </p>
    <p class="text-purple-700 max-w-xl mb-6 animate-fadeIn delay-200">
      Semoga ulang tahunmu kali ini penuh tawa, cinta, dan mimpi indah yang tercapai 😘.  
      Aku sayang kamu lebih dari kata-kata bisa menjelaskan 💕.
    </p>

    <NuxtLink 
      to="/gifts" 
      class="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-50 transition transform hover:scale-105 mt-6 animate-bounce">
      Next… 🎁
    </NuxtLink>
  </div>
</template>

<style>
.falling-heart { animation-name: fall; animation-timing-function: linear; animation-iteration-count: infinite; }
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animate-fadeIn.delay-200 { animation-delay: 0.2s; }
.animate-pulse { animation: pulse 2s infinite; }
.animate-bounce { animation: bounce 2s infinite; }
</style>
