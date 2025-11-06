<template>
  <div class="font-nunito relative min-h-screen">
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
      <h4
        class="text-center text-3xl font-pacifico text-white mb-4 animate-bounced"
      >
        Once upon a time...
      </h4>

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
            Amangboru yang tangguh dan Bou yang luar biasa penuh kasih hmmm 😍.
          </p>
        </div>
      </div>
      <br />

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
      <br />

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
      <br />

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

      <!-- <NuxtLink
        to="/born/meet"
        class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-pink-500 transition transform hover:scale-105"
      >
        Next
      </NuxtLink> -->

      <div class="mt-8 flex justify-center space-x-4">
        <NuxtLink
          to="/born/new"
          class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Go Back
        </NuxtLink>
        <NuxtLink
          to="/born/meet"
          class="bg-white text-black px-6 py-3 rounded-full shadow-lg hover:bg-white transition transform hover:scale-105 font-bold"
        >
          Next
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};
</script>

<style>
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