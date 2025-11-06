<template>
  <div class="min-h-screen relative flex items-center justify-center p-4">
    <!-- 🌟 AUDIO ELEMENT FOR MUSIC 🌟 -->
    <audio ref="musicRef" loop style="display: none">
      <!-- Sumber audio Anda -->
      <source src="/music/pretty.mp3" type="audio/mpeg" />
      Browser Anda tidak mendukung elemen audio.
    </audio>

    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/a5.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
    </div>

    <!-- Mobile Frame Container -->
    <div
      class="relative z-10 w-full max-w-sm mx-auto bg-black/20 rounded-3xl shadow-xl overflow-hidden backdrop-blur-xs"
      style="
        aspect-ratio: 9/19;
        border: 8px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3);
      "
    >
      <div class="relative h-full w-full p-4 flex flex-col font-sans">
        <!-- HEADER WITH MUSIC CONTROL AND HOME BUTTON -->
        <div class="flex justify-between items-center mb-4">
          <!-- Title (currently empty) -->
          <h2 class="text-2xl italic font-extrabold text-white"></h2>

          <div class="flex space-x-2">
            <!-- Music Control Button (Play/Pause) -->
            <button
              @click="toggleMusic"
              class="bg-white/10 text-white p-2 rounded-full shadow-lg hover:bg-white/30 backdrop-blur-md transition transform hover:scale-105"
              aria-label="Play/Pause Music"
            >
              <!-- Menggunakan Ikon Play/Pause dari SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <!-- Ikon Pause (jika sedang memutar) -->
                <path v-if="isMusicPlaying" d="M11 5V19M18 5V19" />
                <!-- Ikon Play (jika sedang berhenti) -->
                <polygon v-else points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>

            <!-- Home Link -->
            <NuxtLink
              to="/born/childhood"
              class="bg-white/10 text-white p-2 rounded-full shadow-lg hover:bg-white/30 transition transform hover:scale-105 inline-flex items-center justify-center backdrop-blur-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Scrollable Content Area -->
        <div class="relative flex-grow overflow-y-auto pr-2 scroll-touch">
          <p class="italic text-white text-base leading-relaxed">
            App ini aku develop pakai javascript dan Vue.js, ngoding nya pakai
            Vscode dan tentunya pakai cinta. Ini sebenernya web tapi responsive
            ke mobile dan all devices. aku pakai domain yg free aja wkwk.
          </p>
          <br />
          <p class="italic text-white text-base leading-relaxed">
            Urlnya aku buat hafsbday, itu aku ambil dari singkatan nama kamu
            “HAFS BDAY”. Aku udah push ke repositoryku lumayan buat nambahin
            portofolio wkwk.
          </p>
          <br />
          <p class="italic text-white text-base leading-relaxed">
            Aku startnya itu 2 hari lalu, dan ngodingnya sepulang kerja. inget
            ga waktu aku blg malem2 ada deadline kerjaan, nah sebenernya lg
            ngoding buat App ini wkwk.
          </p>

          <br />
          <p class="italic text-white text-base leading-relaxed">
            Sebenernya ga yang gimana2 banget sih, tapi setidaknya hal yg ku
            suka(ngoding) dan ada kamu didalemnya, hehe.
          </p>

          <br />
          <p class="italic text-white text-base leading-relaxed">
            semoga kamu suka ya sayang, <br />sekali lagi selamat ulangtahun
            sayangku..
          </p>

          <br />
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex justify-center space-x-4">
          <NuxtLink
            to="/born/images"
            class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
          >
            Go Back
          </NuxtLink>
          <!-- <NuxtLink
            to="/born/childhood"
            class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
          >
            Home
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Menggunakan Options API/standard export untuk Composition API
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

      audio.volume = 0.5;

      audio
        .play()
        .then(() => {
          isMusicPlaying.value = true;
        })
        .catch((error) => {
          // Autoplay was prevented.
          console.warn(
            "Autoplay blocked by browser. Please tap the music control button."
          );
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
        audio
          .play()
          .then(() => {
            isMusicPlaying.value = true;
          })
          .catch(() => {
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
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

/* FIX for smooth scrolling on iOS and mobile Safari/Chrome */
.scroll-touch {
  -webkit-overflow-scrolling: touch;
}

/* Ensure the main page container allows scrolling if needed (safety check) */
/* The min-h-screen should handle this, but adding overscroll-behavior can help */
.min-h-screen {
  /* Prevents the background page from scrolling when the user hits the top/bottom of the card scroll area */
  overscroll-behavior-y: contain;
}
</style>