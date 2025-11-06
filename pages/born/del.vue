<template>
  <div class="min-h-screen relative flex items-center justify-center p-4">
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
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <div
      class="relative z-10 w-full max-w-sm mx-auto bg-black/20 rounded-3xl shadow-xl overflow-hidden backdrop-blur-xl"
      style="
        aspect-ratio: 9/19;
        border: 8px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3);
      "
    >
      <div class="relative h-full w-full p-4 flex flex-col font-sans">
        
        <!-- HEADER WITH MUSIC CONTROL -->
        <div class="flex justify-between items-center mb-4 relative">
          <h2 class="text-3xl font-extrabold text-white text-center">
            The Dayyyyy!
          </h2>
          
          <!-- Music Control Button -->
          <button
            @click="toggleMusic"
            class="absolute right-0 bg-white/10 text-white p-2 rounded-full shadow-lg hover:bg-white/30 backdrop-blur-md transition transform hover:scale-105"
            aria-label="Play/Pause Music"
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


        <div
          class="relative flex-grow pr-2 scroll-touch 
                 flex flex-col justify-center items-center 
                 overflow-y-auto"
        >
          <table class="calendar-table">
            <thead>
              <tr class="text-xs text-white">
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>
            </thead>
            <tbody class="text-white">
              <tr>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="day-cell weekend">1</td>
              </tr>
              <tr>
                <td class="day-cell weekend">2</td>
                <td class="day-cell">3</td>
                <td class="day-cell">4</td>
                <td class="day-cell">5</td>
                <td class="day-cell">6</td>
                <td class="day-cell highlight-day weekend">7</td>
                <td class="day-cell weekend">8</td>
              </tr>
              <tr>
                <td class="day-cell weekend">9</td>
                <td class="day-cell">10</td>
                <td class="day-cell">11</td>
                <td class="day-cell">12</td>
                <td class="day-cell">13</td>
                <td class="day-cell weekend">14</td>
                <td class="day-cell weekend">15</td>
              </tr>
              <tr>
                <td class="day-cell weekend">16</td>
                <td class="day-cell">17</td>
                <td class="day-cell">18</td>
                <td class="day-cell">19</td>
                <td class="day-cell">20</td>
                <td class="day-cell weekend">21</td>
                <td class="day-cell weekend">22</td>
              </tr>
              <tr>
                <td class="day-cell weekend">23</td>
                <td class="day-cell">24</td>
                <td class="day-cell">25</td>
                <td class="day-cell">26</td>
                <td class="day-cell">27</td>
                <td class="day-cell weekend">28</td>
                <td class="day-cell weekend">29</td>
              </tr>
              <tr>
                <td class="day-cell weekend">30</td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
                <td class="empty"></td>
              </tr>
            </tbody>
          </table>

          <!-- 🌟 UPDATED BUTTON CONTAINER: Using mr-4 on the first link 🌟 -->
          <div class="mt-8 text-center">
            <NuxtLink
              to="/born/meet"
              class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold mr-4"
            >
              Go Back
            </NuxtLink>
            <NuxtLink
              to="/born/test"
              class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
            >
              Next
            </NuxtLink>
          </div>
        </div>
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
        
        // Waktu mulai: 25 detik
        const START_TIME_SECONDS = 25; 

        // --- Music Functions ---
        const startMusic = () => {
            const audio = musicRef.value;
            if (!audio) {
                 console.error("Audio element not found.");
                 return;
            }
            
            // Memastikan audio metadata dimuat sebelum mengatur currentTime
            audio.onloadedmetadata = () => {
                 audio.currentTime = START_TIME_SECONDS;
                 audio.volume = 0.5;

                 audio.play().then(() => {
                    isMusicPlaying.value = true;
                 }).catch(error => {
                    console.warn("Autoplay blocked. Tap music button to start.");
                    isMusicPlaying.value = false;
                 });
            };
            
            audio.load(); // Memaksa pemuatan
        };

        const toggleMusic = () => {
            const audio = musicRef.value;
            if (!audio) return;

            if (isMusicPlaying.value) {
                audio.pause();
                isMusicPlaying.value = false;
            } else {
                // Saat diputar secara manual, pastikan posisi benar jika belum mulai
                if (audio.currentTime === 0 || audio.paused) {
                     audio.currentTime = START_TIME_SECONDS;
                }
                
                audio.play().then(() => {
                    isMusicPlaying.value = true;
                }).catch(() => {
                    console.error("Failed to play audio on interaction.");
                });
            }
        };

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

<style scoped>
/* Base Font (copied from your original page) */
.font-sans {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

/* FIX for smooth scrolling on iOS and mobile Safari/Chrome */
.scroll-touch {
  -webkit-overflow-scrolling: touch;
}

/* --- Calendar Styling --- */
.calendar-table {
  /* Removed 'width: 100%;' */
  max-width: 300px; /* Ensures the table is a readable size */
  border-collapse: collapse;
  table-layout: fixed; /* Ensures all columns are the same width */
  margin-top: 15px;
  /* Added auto margins for horizontal centering if max-width is set */
  margin-left: auto;
  margin-right: auto;
}

.calendar-table th {
  padding: 8px 4px;
  text-align: center;
  font-weight: bold;
  opacity: 0.7;
}

.day-cell {
  text-align: center;
  padding: 10px 0;
  border-radius: 10px; /* Rounded corners for days */
  font-weight: 600;
  transition: background-color 0.2s;
  cursor: default;
}

/* Styling for empty cells at the start/end of the month */
.empty {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Highlight for November 7th, 2025 (Friday) */
.highlight-day {
  background-color: #60c7ff; /* Bright highlight color */
  color: #ffffff;
  border: 3px solid #6ee7ff; /* Strong border to stand out */
  box-shadow: 0 0 10px rgba(255, 193, 7, 0.5);
  transform: scale(1.05);
}

/* Weekend color styling (for Saturday and Sunday) */
.weekend {
  color: #ff0606; /* Red color for weekends */
}

/* Reset weekend color for the highlighted day so it stands out */
.highlight-day.weekend {
  color: #000;
}
</style>