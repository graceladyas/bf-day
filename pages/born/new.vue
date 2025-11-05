<template>
  <div class="relative font-nunito overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
    </div>

    <div
      class="absolute w-full h-full pointer-events-none overflow-hidden z-10"
    >
      <div
        v-for="n in 30"
        :key="n"
        class="falling-heart text-pink-400 absolute"
        :style="{
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          fontSize: `${12 + Math.random() * 18}px`,
          top: `-${Math.random() * 100}px`,
        }"
      >
        ❤️
      </div>
    </div>

    <section
      class="relative z-20 flex flex-col justify-center items-center min-h-screen text-center p-6 animate-fadeIn"
    >
      <h1 class="text-4xl font-bold text-pink-600 mb-4 animate-pulse">
        Disclaimer!!! ⚠️
      </h1>
      <p class="text-lg text-white max-w-xl mb-6">
        This app was coded specially for you, sayangkuu 💕
      </p>
      <!-- <small class="text-white"> Ingat ya, ur GF is a Software Engineer wkwk 😝 </small><br><br> -->
      <small class="text-white italic font-light">
        Remember, your girlfriend is a Software Engineer wkwk 😝 </small
      ><br /><br />

      <NuxtLink
        to="/born/love"
        class="bg-white text-pink-600 px-6 py-3 rounded-full shadow-lg hover:bg-pink-50 transition transform hover:scale-105"
      >
        Aku ada cerita baby.....
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style>
/* Falling hearts animation (like snow) */
@keyframes fall {
  0% {
    transform: translateY(-50px) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}
.falling-heart {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* Fade in animation for sections */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

/* Pulse animation for headings */
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
.animate-pulse {
  animation: pulse 2s infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>