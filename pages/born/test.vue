<template>
  <div class="min-h-screen relative flex items-center justify-center p-4">
    <!-- 🌟 AUDIO ELEMENT FOR MUSIC 🌟 -->
    <audio ref="musicRef" loop style="display: none">
      <!-- Pastikan file /music/thankgod.mp3 tersedia di proyek Anda -->
      <source src="/music/thankgod.mp3" type="audio/mpeg" />
      Browser Anda tidak mendukung elemen audio.
    </audio>

    <!-- Background Layer -->
    <div class="absolute inset-0 z-0">
      <div
        class="w-full h-full bg-cover bg-center"
        style="background-image: url('/img/bck.jpeg')"
      ></div>
      <!-- couple -->
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    <!-- Mobile Frame Container -->
    <div
      class="relative z-10 w-full max-w-sm mx-auto bg-black/20 rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm"
      style="
        aspect-ratio: 9/19;
        border: 8px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.3);
      "
    >
      <div class="relative h-full w-full p-4 flex flex-col font-sans">
        <!-- HEADER WITH MUSIC CONTROL -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl italic font-extrabold text-white">
            Happy Birthday Sayangku..
          </h2>

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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <!-- Ikon Pause (jika sedang memutar) -->
              <path v-if="isMusicPlaying" d="M11 5V19M18 5V19" />
              <!-- Ikon Play (jika sedang berhenti) -->
              <polygon v-else points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>
        </div>

        <!-- Scrollable Content Area -->
        <div class="relative flex-grow overflow-y-auto pr-2 scroll-touch">
          <p class="text-white text-base font-bold italic leading-relaxed">
            Filipi 1:3-4 <br />
            “Aku mengucap syukur kepada Allahku setiap kali aku mengingat kamu.
            Dan setiap kali aku berdoa untuk kamu semua, aku selalu berdoa
            dengan sukacita.”
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            Ini ucapan ulang tahun dariku yang ketiga buat kamu sejak tahun
            2023, dari yang dulu cuma orang asing, sampai sekarang jadi pengisi
            hatiku.
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            Sebenarnya bisa aja cuma ucapin di wa, tapi kamu tahu kan, aku ga
            suka hal2 yang biasa saja wqwq. kali ini aku pengen sedikit beda,
            walau sederhana, tapi dari hati. Karena mungkin aku belum bisa kasih
            banyak hal, Jd miinimal ucapan ini bisa mewakili cinta dan kasihku
            ke kamu.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Selamat ulang tahun ya sayangku, cintaku.
            Selamat menikmati berkat2 Tuhan, semakin diberi kesehatan, umur yang
            panjang, dilimpahkan rezeki sederas cintaku padamu, dikelilingi
            orang-orang baik, dijauhkan dari hal buruk, dikuatkan dalam setiap
            langkah, dan tentu semakin mencintai aku juga ;)
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Mungkin ini fase ‘proses’ yang harus kita jalani, menunggu,
            berharap, mempercayakan segalanya pada waktu Tuhan. tp kadang sedih
            denger kamu bilang udah bosen disana, udah stuck :( sabar ya
            hasianku. Percaya aja di balik setiap penantian, selalu ada doa yang
            terkabul, jangan lupa doa yg kencengggg ya biar Tuhan cepat kirim
            kabar baik buat kita berdua.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Makasi udah hadir ke bumi ini sayang, makasi udah bawa aku melihat
            dunia luar, kalau ga ada kamu mungkin aku masih diam di tempat yang
            sama.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Makasi juga udah mau selalu nyamperin aku ya sayang, kadang aku
            gaenak, gengsi tapi rinduku selalu lebih keras dari logikaku.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Smoga kita saling bertumbuh ke arah yang lebih baik ya sayang,
            semakin bijak, semakin dewasa, semakin bisa memimpin dan membimbing aku
            juga dan lebih saling memahami.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            oiya tentang tantrumku, aku tahu itu bagian dariku yang masih belajar. Aku cuma
            harap, kita sama2 ngerti apa yang bisa jadi pemicu, supaya cinta
            kita gak kalah sama ego.
          </p>

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Impulsifnya dikurangin, aku harap kamu bisa mengontrol diri. belajar
      dan mengendalikan diri ya sayang.
          </p>

          <br />

          <br />
          <p class="text-white text-base italic leading-relaxed">
            Kalau ada apa apa harus ceritaaa!! <br />
            mau digigit semut kek, digigit nyamuk kek, harus ceritaaaa!!!<br /><br />
            kalau lagi sakit harus vn, sebetulnya aku minta vn mau tau perubahan
            suara kamu makin parah ga. karena sekecil apa pun itu, aku mau tahu
            setiap harimu sayang.
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            kalau saling senang, bahagia, kita selalu ada titik temunya. aku
            juga berharap gitu kalau lagi debat atau kelahi ya sayang, harus
            selalu ada titik temu nya tanpa saling menjauh.
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            Semoga di tahun2 mendatang kita tetap bergandengan tangan, saling
            menua dengan ha ha hi hi, sampai akhirnya kita saling mengucapkan
            happy birthday di sisi yang sama di tahun2 selanjutnya.
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            Ingat yang selalu aku bilang, dikehidupan yang cuma sekali ini, aku
            harap kita saling mengasihi, mencintai, menyayangi satu sama lain ya
            baby. Jangan pernah merasa sendiri ya sayang, aku selalu ada disini,
            mendukungmu, mendoakanmu, mencintaimu.
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            sekali lagi selamat ulangtahun ya hasianku, bahagia selalu ya,
            <br /><br />
            my amen for all ur wishes… <br />
            I laffyuuuu so muchhhh, <br />
            God Bless You.. <br /><br />
          </p>
          <br />
          <p class="text-white text-base italic leading-relaxed">
            with love, <br />
            graceladyas
          </p>
          <br />
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 flex justify-center space-x-4">
          <NuxtLink
            to="/born/del"
            class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
          >
            Go Back
          </NuxtLink>
          <NuxtLink
            to="/born/images"
            class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
          >
            Next
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Menggunakan Options API/standard export untuk menghindari konflik kompleks
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