<template>
  <div class="font-nunito">
    <!-- Section 1: Intro -->
    
    <section class="flex flex-col justify-center items-center min-h-screen bg-pink-100 text-center p-6">
      <br><br><br><br>
      <h1 class="text-5xl font-pacifico text-pink-600 mb-4 animate-bounce">Once upon a time...</h1>
      <!-- <p class="text-lg text-pink-700 mb-6">
        There was a baby born on <strong>Nov 07, 1996</strong> called <strong>Hendro</strong>.
      </p> -->
      <p class="text-lg text-pink-700 mb-6 max-w-xl">
        Pada suatu waktu, di hari yang indah, tanggal 7 November 1996,  
        lahirlah seorang bayi kecil yang kelak jadi orang paling spesial dalam hidupku 💫  <br>
        Namanya Hendro Anto Ferdinan Silitonga, biasa dipanggil 'Sayang' ehhhh (yang boleh manggil GLAS aja) .  
        Hari itu dunia jadi lebih hangat, lebih cerah, dan jauh lebih indah, karena ada dia.
      </p>

      <p class="text-lg text-pink-700 mb-6 max-w-xl"> 
        Sayangkuuuu adalah anak kedua dari tiga bersaudara.  
        Lahir dari Ayah yang tangguh dan Bou yang luar biasa hebat.  
        Sejak kecil, hidupnya penuh tawa, canda, dan kehangatan.  
        Kadang usil, kadang nyebelin, tapi selalu berhasil bikin hati ngengenin hmmm 😍.
      </p>

       <img src="/img/baby.png" alt="Teenage" class="rounded-xl shadow-md w-72 mb-6"/>
      <p class="text-lg text-pink-700 mb-6 max-w-xl"> 
        Sejak SMA, dia udah mulai merantau — belajar mandiri, tumbuh jadi pribadi kuat dan ceria.  
        Humoris banget, selalu bisa bikin suasana rame, walau ya... agak pala batu dikit wkwk 😅.  
        Tapi justru itu yang bikin dia unik dan selalu dirindukan.
      </p>
      <!-- <button @click="scrollToSection('section2')" 
              class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition">
        Next 🡢
      </button> -->
       <NuxtLink 
  to="/born/meet" 
  class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105">
  terussssss
</NuxtLink>
    </section>

    <!-- Section 2: Childhood -->
    <!-- <section id="section2" class="flex flex-col justify-center items-center min-h-screen bg-purple-50 text-center p-6">
      <h2 class="text-4xl font-bold text-purple-600 mb-4">Childhood Adventures</h2>
      <p class="text-purple-700 text-lg mb-6 max-w-xl">
        Hendro loved playing outside, chasing butterflies, and dreaming big.
      </p>
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" 
           alt="Childhood" class="rounded-xl shadow-md w-72 mb-6"/>
      <button @click="scrollToSection('section3')" 
              class="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-50 transition">
        Next 🡢
      </button>
    </section> -->

    <!-- Section 3: Teenage Years -->
    <!-- <section id="section3" class="flex flex-col justify-center items-center min-h-screen bg-yellow-50 text-center p-6">
      <h2 class="text-4xl font-bold text-yellow-600 mb-4">Teenage Years</h2>
      <p class="text-yellow-700 text-lg mb-6 max-w-xl">
        Exploring new hobbies, making friends, and building dreams for the future.
      </p>
      <img src="/img/baby.png" 
           alt="Teenage" class="rounded-xl shadow-md w-72 mb-6"/>
      <button @click="scrollToSection('section4')" 
              class="bg-white text-yellow-600 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-50 transition">
        Next 🡢
      </button>
    </section> -->

    <!-- Section 4: Today -->
    <!-- <section id="section4" class="flex flex-col justify-center items-center min-h-screen bg-blue-50 text-center p-6">
      <h2 class="text-4xl font-bold text-blue-600 mb-4">Today</h2>
      <p class="text-blue-700 text-lg mb-6 max-w-xl">
        Now, celebrating your special day! Happy Birthday, Hendro 💖🎉
      </p>
      <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" 
           alt="Birthday" class="rounded-xl shadow-md w-72 mb-6"/>
      <button @click="scrollToSection('section1')" 
              class="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition">
        Back to Start 🔄
      </button>
    </section> -->
  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
/* Optional: add some floating hearts animation */
.heart {
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: pink;
  border-radius: 50%;
  animation: float 4s infinite ease-in-out;
}
@keyframes float {
  0% { transform: translateY(0) }
  50% { transform: translateY(-20px) }
  100% { transform: translateY(0) }
}
</style>
