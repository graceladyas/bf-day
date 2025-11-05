<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen relative font-nunito px-4"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 text-center p-6">
      <h2 class="text-4xl sm:text-5xl font-bold text-pink-400 animate-bounce">
         yeayyyy unlocked! 🎉
      </h2>
      <p class="mt-4 text-xl sm:text-2xl text-white">
        Welcome to Hendro’s Birthday Story ;)
      </p>
      
      <NuxtLink
        to="/born/childhood" 
        class="mt-8 inline-block bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-pink-600 transition text-lg sm:text-xl transform hover:scale-105"
      >
        Masuk ke Cerita 
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// If you're using Nuxt 3, you can optionally set metadata here
definePageMeta({
  layout: false, // Use if you don't want the default layout
})
</script>

<style scoped>
/* You can add custom transitions or styles here if needed */
</style>