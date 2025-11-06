<template>
  <div
    class="min-h-screen flex flex-col items-center justify-start px-4 pt-8 font-nunito relative"
  >
    <!-- 🌟 AUDIO ELEMENT FOR ONLINE MUSIC 🌟 -->
    <audio ref="musicRef" loop style="display: none;">
      <!-- SOURCE UPDATED TO YOUR LOCAL FILE -->
      <source src="/music/hbd.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <div class="relative z-10 w-full flex flex-col items-center">
      <br /><br /><br /><br />
      <h1 class="text-3xl font-bold text-white mb-6 text-center shadow-lg">
        Hellow Baby 🎉
      </h1>

      <br /><br /><br /><br />

      <div class="grid grid-cols-2 gap-4 w-full max-w-xs">
        <NuxtLink
          to="/born/new"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🧸</span>
          <span class="text-sm text-white">Childhood</span>
        </NuxtLink>

        <NuxtLink
          to="/born/test"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🥳</span>
          <span class="text-sm text-white">Message</span>
        </NuxtLink>

        <button
          @click="currentSection = 'emojis'"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🎁</span>
          <span class="text-sm text-white">Gift</span>
        </button>

        <!-- 🌟 MUSIC BUTTON IS NOW UNCOMMENTED AND ACTIVE 🌟 -->
        <button
          @click="toggleMusic"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🎵</span>
          <span class="text-sm text-white">{{ isMusicPlaying ? 'Stop Music' : 'Play Music' }}</span>
        </button>
        <!-- 🌟 END MUSIC BUTTON 🌟 -->

        <NuxtLink
          to="/born/images"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🖼️</span>
          <span class="text-sm text-white">Images</span>
        </NuxtLink>

        <NuxtLink
          to="/born/video"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🎬</span>
          <span class="text-sm text-white">Video</span>
        </NuxtLink>
        <NuxtLink
          to="/born/bio"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">👤</span>
          <span class="text-sm text-white">About me</span>
        </NuxtLink>
        <NuxtLink
          to="/born/del"
          class="flex flex-col items-center justify-center p-4 bg-white/40 hover:bg-white/50 rounded-2xl shadow-xl text-blue-800 backdrop-blur-md transition"
        >
          <span class="text-3xl mb-1">🗓️</span>
          <span class="text-sm text-white">Calendar</span>
        </NuxtLink>
      </div>

      <div
        v-if="currentSection"
        class="mt-6 w-full max-w-xs p-4 bg-white/30 rounded-xl shadow-2xl relative backdrop-blur-md text-gray-800"
      >
        <button
          @click="currentSection = ''"
          class="absolute top-2 right-2 text-red-600 font-bold hover:text-red-700"
        >
          ✕
        </button>

        <div v-if="currentSection === 'childhood'" class="text-center">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">
            🧸 Childhood Memories
          </h3>
          <p class="text-gray-800">
            A glimpse of your childhood days… smiles and little adventures! 🎂
          </p>
        </div>

        <div v-if="currentSection === 'message'" class="text-center">
          <h3 class="text-xl font-semibold text-blue-700 mb-2">
            🥳 Birthday Wishes
          </h3>
          <p class="text-gray-800">
            Wishing you endless happiness, smiles, and love on your special day!
            💖
          </p>
        </div>
        <div
          v-if="currentSection === 'emojis'"
          class="relative h-24 overflow-hidden"
        >
          <div
            class="absolute top-10 left-10 text-xl animate-bounce text-yellow-500"
          >
            Kirim linknya sayang wkwk
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentSection = ref("");
const isMusicPlaying = ref(false);
const musicRef = ref(null); // Reference to the <audio> element

// Function to handle autoplay attempt
function startMusic() {
  const audio = musicRef.value;
  if (!audio) return;
  
  // Set volume lower for background music
  audio.volume = 0.5;

  audio.play().then(() => {
    isMusicPlaying.value = true;
  }).catch(error => {
    // Autoplay was prevented. User must interact.
    console.warn("Autoplay blocked by browser. Please tap the button to start music.");
    isMusicPlaying.value = false;
  });
}

onMounted(() => {
    // Wait a brief moment for Vue to mount the ref to the DOM element
    setTimeout(() => {
        startMusic();
    }, 100); 
});

// Function to handle the button click
function toggleMusic() {
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
}
</script>

<style scoped>
@keyframes bounceCustom {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce {
  animation: bounceCustom 2s infinite;
}

@keyframes pulseCustom {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
.animate-pulse {
  animation: pulseCustom 1.5s infinite;
}
</style>