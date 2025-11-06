<template>
  <div
    class="relative min-h-screen flex flex-col justify-center items-center p-6 text-center overflow-hidden font-nunito"
  >
    <!-- 🌟 AUDIO ELEMENT FOR MUSIC 🌟 -->
    <audio ref="musicRef" loop style="display: none;">
      <!-- Using your specified local file -->
      <source src="/music/goodness.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    
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
        <img
          src="/img/a3.jpeg"
          alt="Teenage"
          style="width: 30px; height: 30px"
          class="rounded-xl shadow-2xl mb-6 border-4 border-white/50"
        />
      </div>
    </div>

    <div class="relative z-20 flex flex-col justify-center items-center">
      
      <!-- HEADER WITH MUSIC CONTROL -->
      <div class="w-full max-w-xs flex justify-between items-center relative mb-4">
        <h1 class="text-3xl italic font-bold font-pacifico text-white animate-pulse">
          Long story short ....
        </h1>
        
        <!-- Music Control Button -->
        <button
          @click="toggleMusic"
          class="absolute right-0 bg-white/10 text-white p-2 rounded-full shadow-lg hover:bg-white/30 backdrop-blur-md transition transform hover:scale-105"
          aria-label="Play/Pause Music"
          style="top: -24px" 
        >
          <!-- Play/Pause Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <!-- Pause Icon (if playing) -->
            <path v-if="isMusicPlaying" d="M11 5V19M18 5V19"/>
            <!-- Play Icon (if paused) -->
            <polygon v-else points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
      </div>

      <!-- Content Blocks -->
      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="italic text-white">
            Langsung lompat ke tahun 2023 aja ya baby wwkw
          </p>
        </div>
      </div>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="italic text-white">
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
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-center">
          <p class="italic text-white">
            "paribanmu dia ges, mamanya manurung" - YP wkwk
          </p>
        </div>
      </div>

      <div class="mt-8 flex justify-center space-x-4">
        <NuxtLink
          to="/born/love"
          class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Go Back
        </NuxtLink>
        <NuxtLink
          to="/born/del"
          class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Next
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    setup() {
        const isMusicPlaying = ref(false);
        const musicRef = ref(null); 

        // --- Music Functions ---
        const startMusic = () => {
            const audio = musicRef.value;
            if (!audio) {
                 console.error("Audio element not found.");
                 return;
            }
            
            // 🌟 SETEL AUDIO UNTUK MULAI DARI DETIK KE-12 🌟
            audio.currentTime = 20;
            audio.volume = 0.5;

            audio.play().then(() => {
                isMusicPlaying.value = true;
            }).catch(error => {
                // Autoplay was prevented. User must interact.
                console.warn("Autoplay blocked. Tap music button to start.");
                isMusicPlaying.value = false;
            });
        };

        const toggleMusic = () => {
            const audio = musicRef.value;
            if (!audio) return;

            if (isMusicPlaying.value) {
                audio.pause();
                isMusicPlaying.value = false;
            } else {
                // Jika lagu mulai diputar, pastikan current time disetel ke 12 jika belum.
                if (audio.currentTime === 0) {
                     audio.currentTime = 20;
                }
                
                audio.play().then(() => {
                    isMusicPlaying.value = true;
                }).catch(() => {
                    console.error("Failed to play audio on interaction.");
                });
            }
        };

        // Memastikan inisialisasi dipanggil setelah DOM siap
        onMounted(() => {
            // Beri waktu tunggu singkat agar elemen audio siap
            setTimeout(startMusic, 100); 
        });

        return {
            isMusicPlaying,
            musicRef,
            toggleMusic,
        };
    },
};
</script>

<style>
/* ... (Existing styles for falling-heart, fall, animate-pulse, pulse, animate-bounce, bounce) ... */

.falling-heart {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes fall {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(600px);
    opacity: 0;
  }
}

.animate-pulse {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>