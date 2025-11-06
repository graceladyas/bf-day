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
      <div
        class="relative z-10 w-full max-w-sm mx-auto bg-black/20 rounded-3xl shadow-xl overflow-hidden backdrop-blur-xl"
        style="
          aspect-ratio: 9/19;
          border: 8px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3);
        "
      >
        <div class="relative h-full w-full p-4 flex flex-col font-sans">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl italic font-extrabold text-white"></h2>

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
          <div class="relative flex-grow overflow-y-auto pr-2 scroll-touch">
            <p class="italic text-white text-base leading-relaxed">
              App ini aku develop pakai javascript dan Vue.js, ngoding nya pakai
              Vscode dan tentunya pakai cinta. Ini sebenernya web tapi
              responsive ke mobile dan all devices. aku pakai domain yg free aja
              wkwk.
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
          <div class="mt-8 flex justify-center space-x-4">
            <NuxtLink
              to="/born/images"
              class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
            >
              Go Back
            </NuxtLink>
            <NuxtLink
              to="/born/childhood"
              class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
            >
              Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
