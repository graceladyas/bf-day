<template>
  <div
    class="min-h-screen flex flex-col items-center justify-start px-4 pt-8 font-nunito relative"
  >
    <!-- 🌟 AUDIO ELEMENT FOR MUSIC (Ganti src ke /music/sal.mp3) 🌟 -->
    <audio ref="musicRef" loop style="display: none;">
      <!-- Pastikan file /music/sal.mp3 tersedia di proyek Anda -->
      <source src="/music/sal.mp3" type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>

    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Page Content -->
    <div class="relative z-10 w-full max-w-6xl">
      
      <!-- HEADER WITH MUSIC CONTROL -->
      <div class="flex justify-center items-center mb-8 relative">
        <h1 class="text-3xl font-bold text-white text-center">
          Our Video 🎉
        </h1>
        
        <!-- Music Control Button (Absolute right to prevent shifting the title) -->
        <!-- <button
          @click="toggleMusic"
          class="absolute right-0 bg-white/10 text-white p-2 rounded-full shadow-lg hover:bg-white/30 backdrop-blur-md transition transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
            <path v-if="isMusicPlaying" d="M11 5V19M18 5V19"/>
            <polygon v-else points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button> -->
      </div>

      <!-- Gallery Grid (Video Only) -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(item, index) in media"
          :key="index"
          class="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition relative"
          @click="openModal(index)"
        >
          <!-- Display Video Element in Grid View -->
          <video
            :src="item.src"
            :poster="item.poster"
            class="w-full h-48 object-cover"
            preload="metadata"
            muted
          ></video>
          <!-- Overlay Play Button -->
          <div class="absolute inset-0 flex items-center justify-center bg-black/30">
            <!-- Ikon Play besar di tengah -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <transition name="fade">
      <div
        v-if="selectedImage !== null"
        class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      >
        <div class="relative flex items-center justify-center w-full max-w-4xl">
          <!-- Left arrow -->
          <button
            v-if="selectedImage > 0"
            @click="prevImage"
            class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4 hover:text-pink-500 z-50"
          >
            &#10094;
          </button>

          <!-- Media Viewer (Video Only) -->
          <!-- controls, autoplay, dan loop ditambahkan agar video di modal berfungsi penuh -->
          <video
            :src="media[selectedImage]?.src"
            class="max-h-[80vh] max-w-full rounded-lg shadow-lg mx-auto transition-transform duration-300"
            controls
            autoplay
            loop
            @touchstart="touchStart($event)"
            @touchend="touchEnd($event)"
          ></video>

          <!-- Right arrow -->
          <button
            v-if="selectedImage < media.length - 1"
            @click="nextImage"
            style="right: -10px"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4 hover:text-pink-500 z-50"
          >
            &#10095;
          </button>

          <!-- Close button -->
          <button
            @click="selectedImage = null"
            class="absolute top-2 right-2 text-white text-3xl font-bold hover:text-pink-500"
          >
            &times;
          </button>
        </div>
      </div>
    </transition>
    <br><br><br>
    <br><br><br>
    <br><br><br>
    <br><br><br>
    <br><br><br>
    <br><br><br>

    <div class="mt-8 flex justify-center space-x-4">
      <NuxtLink
        to="/born/images"
        class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
      >
        Go Back
      </NuxtLink>
      <NuxtLink
        to="/born/bio"
        class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
      >
        Next
      </NuxtLink>
    </div><br>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Dibuat hanya berisi item video. Image paths yang lama digunakan sebagai poster/placeholder.
const media = ref([
  { src: "/img/gereja.mp4", type: "video", poster: "/img/gereja.mp4" }, // Video pertama
  // { src: "/video/vacation.mp4", type: "video", poster: "/img/a2.jpeg" }, // Video placeholder 2
  // { src: "/video/moment.mp4", type: "video", poster: "/img/a3.jpeg" }, // Video placeholder 3
  // Anda bisa tambahkan lebih banyak video di sini jika diperlukan
]);

const selectedImage = ref(null);
const isMusicPlaying = ref(false);
const musicRef = ref(null); 

// Open modal
function openModal(index) {
  selectedImage.value = index;
  // Saat modal terbuka, pause musik agar tidak bertabrakan dengan audio video
  if (isMusicPlaying.value) {
    toggleMusic();
  }
}

// Navigation
function prevImage() {
  if (selectedImage.value > 0) selectedImage.value--;
}
function nextImage() {
  if (selectedImage.value < media.value.length - 1) selectedImage.value++;
}

// Swipe detection
let startX = 0;
function touchStart(e) {
  startX = e.touches[0].clientX;
}
function touchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50) nextImage(); // swipe left → next video
  if (diff > 50) prevImage(); // swipe right → previous video
}

// --- Music Functions ---
function startMusic() {
  const audio = musicRef.value;
  if (!audio) {
    console.error("musicRef not linked to audio element.");
    return;
  }
  
  audio.volume = 0.5;

  audio.play().then(() => {
    isMusicPlaying.value = true;
    console.log("Music started playing automatically.");
  }).catch(error => {
    // Autoplay was prevented.
    console.warn("Autoplay blocked by browser. Please tap the music control button.");
    isMusicPlaying.value = false;

    if (audio.error) {
        console.error("Audio Load Error:", audio.error.code, audio.error.message, "Check file path: /music/sal.mp3");
    }
  });
}

function toggleMusic() {
  const audio = musicRef.value;
  if (!audio) return;

  if (isMusicPlaying.value) {
    audio.pause();
    isMusicPlaying.value = false;
  } else {
    // Panggil startMusic untuk menggunakan logika yang sama
    startMusic(); 
  }
}

// onMounted(() => {
//     // Attempt to start music after component mounts
//     setTimeout(() => {
//         startMusic();
//     }, 100); 
// });

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>