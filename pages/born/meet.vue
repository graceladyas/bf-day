<template>
  <div
    class="relative min-h-screen flex flex-col justify-center items-center p-6 text-center overflow-hidden font-nunito"
  >
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </div>

    <div class="absolute w-full h-full pointer-events-none z-10">
      <div
        v-for="n in 50"
        :key="n"
        class="falling-heart text-white absolute"
        :style="{
          left: `${Math.random() * 100}%`,
          fontSize: `${10 + Math.random() * 14}px`,
          animationDuration: `${4 + Math.random() * 4}s`,
          animationDelay: `${Math.random() * 5}s`,
          top: `-${Math.random() * 150}px`,
        }"
      >
        ✨
      </div>
    </div>

    <div class="relative z-20 flex flex-col justify-center items-center">
      <h1 class="text-5xl font-pacifico text-white mb-4 animate-pulse">
        Long story short ....
      </h1>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="text-white">
            Langsung lompat ke tahun 2023 aja ya baby wwkw
          </p>
        </div>
      </div>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="text-white">
            The first time I saw him, I knew Hendro was here on this earth hehe
          </p>
        </div>
      </div>

      <img
        src="/img/hen.jpeg"
        alt="Birthday"
        class="rounded-xl shadow-2xl w-72 my-6 border-4 border-white/50"
      />

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="text-white">
            "paribanmu dia katanya ges, mamanya manurung" - YP wkwk
          </p>
        </div>
      </div>

      <NuxtLink
        to="/born/childhood"
        class="bg-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-500 transition transform hover:scale-105 mt-6 animate-bounce"
      >
        Terusssss 🎁
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.falling-heart {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes fall {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(600px); opacity: 0; }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>