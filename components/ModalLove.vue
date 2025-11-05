<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="emitClose"
  >
    <div class="bg-white rounded-2xl p-6 w-11/12 max-w-md shadow-lg relative">
      <button @click="emitClose" class="absolute top-3 right-3 text-gray-600 text-2xl">&times;</button>

      <h2 class="text-xl font-semibold mb-3">💖 Our Little Story</h2>
      <p class="text-gray-700 mb-4">
        (Put your '/born/love' content here — text, images, whatever.)
      </p>

      <NuxtLink to="/born/gifts" class="inline-block bg-black text-tosca-400 px-4 py-2 rounded-full">
        Next 🎁
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['close'])
function emitClose() { emit('close') }
</script>
