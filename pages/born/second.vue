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

    <!-- Section 1 – Awal Cerita -->
    <section class="flex flex-col justify-center items-center min-h-screen bg-pink-100 text-center p-6 animate-fadeIn">
      <h1 class="text-5xl font-pacifico text-pink-600 mb-4 animate-bounce">Once Upon a Time...</h1>
      <p class="text-lg text-pink-700 mb-6 max-w-xl">
        Pada suatu waktu, di hari yang indah, tanggal 7 November 1996, lahirlah seorang bayi kecil yang kelak jadi orang paling spesial dalam hidupku 💫.  
        Namanya Hendro Anto Ferdinan Silitonga — tapi bagiku, dia adalah “Sayang” 💖.
      </p>
      <button @click="scrollToSection('section2')" 
              class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105">
        Next 🡢
      </button>
    </section>

    <!-- Section 2 – Masa Kecil -->
    <section id="section2" class="flex flex-col justify-center items-center min-h-screen bg-purple-50 text-center p-6 animate-fadeIn">
      <h2 class="text-4xl font-bold text-purple-600 mb-4 animate-pulse">Masa Kecil 💕</h2>
      <p class="text-purple-700 text-lg mb-6 max-w-xl">
        Sayang adalah anak kedua dari tiga bersaudara. Lahir dari Ibu yang tangguh dan Ayah yang luar biasa hebat.  
        Sejak kecil, hidupnya penuh tawa, canda, dan kehangatan. Kadang usil, kadang nyebelin, tapi selalu bikin hati meleleh 😍.
      </p>
      <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" 
           alt="Childhood" class="rounded-xl shadow-md w-72 mb-6 animate-bounce"/>
      <button @click="scrollToSection('section3')" 
              class="bg-white text-purple-600 px-6 py-3 rounded-full shadow-lg hover:bg-purple-50 transition transform hover:scale-105">
        Next 🡢
      </button>
    </section>

    <!-- Section 3 – Remaja -->
    <section id="section3" class="flex flex-col justify-center items-center min-h-screen bg-yellow-50 text-center p-6 animate-fadeIn">
      <h2 class="text-4xl font-bold text-yellow-600 mb-4 animate-pulse">Remaja & Perjalanan Hidup</h2>
      <p class="text-yellow-700 text-lg mb-6 max-w-xl">
        Sejak SMA, dia udah mulai merantau — belajar mandiri, tumbuh jadi pribadi kuat dan ceria.  
        Humoris banget, selalu bisa bikin suasana rame, walau agak pala batu dikit 😅. Tapi justru itu yang bikin dia unik dan selalu dirindukan.
      </p>
      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" 
           alt="Teenage" class="rounded-xl shadow-md w-72 mb-6 animate-bounce"/>
      <button @click="scrollToSection('section4')" 
              class="bg-white text-yellow-600 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-50 transition transform hover:scale-105">
        Next 🡢
      </button>
    </section>

    <!-- Section 4 – Hari Ini / Ulang Tahun -->
    <section id="section4" class="flex flex-col justify-center items-center min-h-screen bg-blue-50 text-center p-6 animate-fadeIn">
      <h2 class="text-4xl font-bold text-blue-600 mb-4 animate-pulse">Hari Ini 🎉</h2>
      <p class="text-blue-700 text-lg mb-6 max-w-xl">
        Dan hari ini, aku mau rayakan seseorang yang paling aku sayang di dunia ini 🥰.  
        Selamat ulang tahun, Sayangku Hendro ❤️  
        Semoga hari-harimu selalu penuh tawa, berkah, dan cinta tanpa batas 💌.
      </p>
      <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131" 
           alt="Birthday" class="rounded-xl shadow-md w-72 mb-6 animate-bounce"/>
      <button @click="scrollToSection('section1')" 
              class="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition transform hover:scale-105">
        Back to Start 🔄
      </button>
    </section>

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
