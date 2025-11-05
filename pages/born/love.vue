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
      class="relative z-10 flex flex-col justify-center items-center min-h-screen text-center p-6"
    >
      <br /><br /><br /><br />
      <h1 class="text-5xl font-pacifico text-pink-300 mb-4 animate-bounced">
        Once upon a time...
      </h1>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <button class="absolute top-2 right-2 text-red-500 font-bold"></button>
        <div class="text-center">
          <p class="text-gray-800">
            Di hari yang indah, tanggal 7 November 1996, lahirlah seorang bayi
            mungil yang bernama Hendro Anto Ferdinan Silitonga, yang biasa
            dipanggil 'Sayang' ehhhh.... <br /><br />
          </p>
        </div>
      </div>

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <button class="absolute top-2 right-2 text-red-500 font-bold"></button>
        <div class="text-center">
          <p class="text-gray-800">
            Sayangkuuuu adalah anak kedua dari tiga bersaudara. Lahir dari
            Amangboru yang tangguh dan Bou yang luar biasa hebat. Sejak kecil,
            hidupnya penuh tawa, canda, dan kehangatan. Kadang usil, kadang
            nyebelin, tapi selalu berhasil bikin hati ngengenin hmmm 😍.
          </p>
        </div>
      </div>
      <br /><br />

      <img
        src="/img/baby.png"
        alt="Teenage"
        class="rounded-xl shadow-2xl w-72 mb-6 border-4 border-white/50"
      />

      <div
        class="mt-6 w-full max-w-xs p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-lg relative"
      >
        <button class="absolute top-2 right-2 text-red-500 font-bold"></button>
        <div class="text-center">
          <p class="text-gray-800">
            Sejak SMA, dia udah mulai merantau — belajar mandiri, tumbuh jadi
            pribadi kuat dan ceria. Humoris banget, selalu bisa bikin suasana
            rame, walau ya... agak pala batu dikit wkwk 😅. Tapi justru itu yang
            bikin dia unik dan selalu dirindukan.
          </p>
        </div>
      </div>
      <br /><br />

      <NuxtLink
        to="/born/meet"
        class="bg-pink-400 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-500 transition transform hover:scale-105"
      >
        terussssss
      </NuxtLink>
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