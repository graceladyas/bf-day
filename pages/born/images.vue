<template>
  <div
    class="min-h-screen flex flex-col items-center justify-start px-4 pt-8 font-nunito relative"
  >
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
      <h1 class="text-3xl font-bold text-center mb-8 text-white">
        Our Memories 🎉
      </h1>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition"
          @click="openModal(index)"
        >
          <img
            :src="image"
            alt="Gallery Image"
            class="w-full h-48 object-cover"
          />
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
            class="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4 hover:text-pink-500"
          >
            &#10094;
          </button>

          <!-- Image -->
          <img
            :src="images[selectedImage]"
            alt="Selected"
            class="max-h-[80vh] max-w-full rounded-lg shadow-lg mx-auto transition-transform duration-300"
            @touchstart="touchStart($event)"
            @touchend="touchEnd($event)"
          />

          <!-- Right arrow -->
          <button
            v-if="selectedImage < images.length - 1"
            @click="nextImage"
            style="right: -10px"
            class="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold px-4 hover:text-pink-500"
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

    <!-- <NuxtLink
      to="/born/childhood"
      class="bg-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-500 transition transform hover:scale-105 mt-6"
    >
      Back
    </NuxtLink> -->

    <div class="mt-8 flex justify-center space-x-4">
      <NuxtLink
        to="/born/test"
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
import { ref } from "vue";

const images = ref([
  "/img/a1.jpeg",
  "/img/a2.jpeg",
  "/img/a3.jpeg",
  "/img/a4.jpeg",
  // "/img/a5.jpeg",
  // "/img/a6.jpeg",
  "/img/a7.jpeg",
  "/img/a8.jpeg",
  "/img/a9.jpeg",
  "/img/a10.jpeg",
  "/img/a11.jpeg",
  "/img/a12.jpeg",
  "/img/a13.jpeg",
]);

const selectedImage = ref(null);

// Open modal
function openModal(index) {
  selectedImage.value = index;
}

// Navigation
function prevImage() {
  if (selectedImage.value > 0) selectedImage.value--;
}
function nextImage() {
  if (selectedImage.value < images.value.length - 1) selectedImage.value++;
}

// Swipe detection
let startX = 0;
function touchStart(e) {
  startX = e.touches[0].clientX;
}
function touchEnd(e) {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (diff < -50) nextImage(); // swipe left → next image
  if (diff > 50) prevImage(); // swipe right → previous image
}
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
