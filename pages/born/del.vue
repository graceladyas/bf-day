<template>
  <div class="min-h-screen relative flex items-center justify-center p-4">
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
        <div
          class="relative flex-grow pr-2 scroll-touch flex flex-col justify-center items-center overflow-y-auto"
        >
          <h2 class="text-3xl font-extrabold text-white text-center mb-4">
            November 2025 Calendar
          </h2>
          <table class="calendar-table text-white">
            <thead>
              <tr class="text-xs">
                <th>SUN</th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
              </tr>
            </thead>
            <tbody>
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

         
          </div>
           <div class="mt-8 text-center">
            <NuxtLink
              to="/born/meet"
              class="bg-white text-black px-6 py-3 mr-4 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
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
</template>

<script setup>
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
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Ensures all columns are the same width */
  margin-top: 15px;
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