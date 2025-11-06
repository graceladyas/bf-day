<template>
  <div class="font-nunito relative min-h-screen">
    <!-- 🌟 AUDIO ELEMENT FOR MUSIC 🌟 -->
    <audio ref="musicRef" loop style="display: none;">
      <!-- Using your specified local file -->
      <source src="/music/goodness.mp3" type="audio/mpeg" />
      error ges 
    </audio>

    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
    </div>

    <section
      class="relative z-10 flex flex-col justify-center items-center min-h-screen p-6"
    >
      <br /><br /><br /><br />
      
      <!-- HEADER CONTAINER WITH MUSIC CONTROL -->
      <div class="w-full max-w-xs flex justify-between items-center relative mb-4">
        <h4
          class="text-center font-bold italic text-3xl font-pacifico text-white animate-bounced"
        >
          Once upon a time...
        </h4>
        
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
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Tepat tanggal 07 November 1996, lahirlah seorang bayi kicik mungil
            yg kelak akan mencuri hatikuu yuhuu. namanya Hendro Anto Ferdinan
            Silitonga, tapi aku lebih suka memanggilnya “Sayangku, cintakuu”
            xixixi
          </p>
        </div>
      </div>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Sayangku tercinta adalah anak kedua dari tiga bersaudara. Lahir dari
            Amangboru yang tangguh dan Bou yang luar biasa penuh kasih 😍
          </p>
        </div>
      </div>
      <!-- <br /> -->

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Sejak kecil, hidupnya selalu dipenuhi canda, dan hangatnya kasih
            sayang. Kadang usil, kadang nyebelin, kadang tantrum, tapi tetep aja
            buat aku kgn.
          </p>
        </div>
      </div>
      <br />

      <img
        src="/img/baby.png"
        alt="Teenage"
        class="rounded-xl shadow-2xl w-72 mb-6 border-4 border-white/50"
      />

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Sejak SMA, Sayangku mulai merantau, belajar hidup mandiri dan tumbuh
            jadi sosok yang kuat, ceria, dan penuh semangat. Dia selalu dgn
            tawanya ke mana pun pergi. Walau terkadang kepalanya keras, sekeras
            batu yg ada di semesta tapi hatinya lembut, selembut salju wqwq.
          </p>
        </div>
      </div>
      <!-- <br /> -->

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Kadang kalau nyanyi kodamnya suka keluar, ntah dari mana suara
            “OooOOOooMaaaaGoddDdd” (bernyanyi dengan kodam hendro). Pen cubit
            rasanya.
          </p>
        </div>
      </div>
      <!-- <br /> -->

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/20 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <div class="text-base italic leading-relaxed">
          <p class="text-white">
            Namun di balik semua itu, dia punya hati yang tulus, hangat, pekerja
            keras, yang bikin aku yakin, dunia ini terasa lebih indah karena ada
            dia muachhhh
          </p>
        </div>
      </div>
      <br /><br />
      <div class="mt-8 flex justify-center space-x-4">
        <NuxtLink
          to="/born/new"
          class="bg-white font-bold text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Go Back
        </NuxtLink>
        <NuxtLink
          to="/born/meet"
          class="bg-white font-bold text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Next
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    // Memastikan Composition API variabel tersedia di template
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
            
            // Set volume lower for background music
            audio.volume = 0.5;

            audio.play().then(() => {
                isMusicPlaying.value = true;
            }).catch(error => {
                // Autoplay was prevented.
                console.warn("Autoplay blocked by browser. Please tap the music control button.");
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
                // Play will trigger browser's audio context resume if needed
                audio.play().then(() => {
                    isMusicPlaying.value = true;
                }).catch(() => {
                    console.error("Failed to play audio on interaction.");
                });
            }
        };

        // Memastikan inisialisasi dipanggil setelah DOM siap
        onMounted(() => {
            // Memberikan sedikit waktu tunggu untuk memastikan DOM/ref siap
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

<style scoped>
/* Scoped styles from original code */
.font-nunito {
  /* Placeholder font if not defined globally */
  font-family: 'Nunito', sans-serif; 
}
.animate-bounced {
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

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
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>