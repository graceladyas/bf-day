<template>
  <!-- <div class="flex flex-col justify-center items-center min-h-screen font-nunito text-center gap-4">
      <h1 class="font-bold">HAPPY BIRTHDAY SAYANGKUUUUU</h1>
  </div> -->
  <section class="flex flex-col justify-center items-center min-h-screen bg-pink-100 text-center p-6">
  <h1 class="text-5xl font-pacifico text-pink-600 mb-4 animate-bounce">
    HAPPY BIRTHDAY SAYANG 💖
  </h1>
  <p class="text-lg text-pink-700 font-nunito mb-6">
    Wishing you the happiest day ever!
  </p>
 <button 
  class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition"
  @click="scrollToGift">
  Open Gift 🎁
</button>
</section>

<section id="gift" class="py-12 bg-yellow-50 text-center">
  <h2 class="text-3xl font-bold text-yellow-600">Your Gift 🎁</h2>
  <p class="mt-4 text-yellow-700">Surprise! Here’s something special for you ❤️</p>
</section>

<section class="flex flex-col items-center py-12 bg-purple-50">
  <h2 class="text-3xl font-bold text-purple-600 mb-6">Our Moments 💕</h2>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" class="rounded-xl shadow-md" alt="Moment 1">
    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" class="rounded-xl shadow-md" alt="Moment 2">
    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" class="rounded-xl shadow-md" alt="Moment 3">
  </div>
</section>


<section class="flex flex-col items-center py-12 bg-yellow-50">
  <h2 class="text-3xl font-bold text-yellow-600 mb-6">Special Wishes 💌</h2>
  <p class="max-w-xl text-center text-yellow-700 text-lg font-nunito">
    I hope your day is filled with love, laughter, and cake! You make every moment brighter ✨
  </p>
</section>


<footer class="flex flex-col items-center justify-center py-8 bg-pink-200">
  <p class="text-white font-nunito">Made with ❤️ for you, my love</p>
  <p class="text-white text-sm mt-1">© 2025 Hafs Glas</p>
</footer>
<div class="absolute top-0 left-0 w-full h-full pointer-events-none">
  <div class="heart animate-bounce bg-pink-400 rounded-full w-4 h-4 absolute"></div>
  <div class="heart animate-bounce bg-pink-500 rounded-full w-6 h-6 absolute left-20 top-10"></div>
</div>

</template>

<script setup>
const scrollToGift = () => {
  const gift = document.getElementById('gift')
  gift?.scrollIntoView({ behavior: 'smooth' })
}
</script>
  
<style>

p {
  font-size: 14px;
  font-weight: 400;
  color: #555555;
}

.list-decimal {
  list-style-type: decimal;
  margin-left: 0.9rem;
  color: #555555;
}

.test {
  color: #555555;
  font-size: 14px;
}
</style>
  


