<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 17.27L18.18 21 16.54 13.97 
         22 9.24 14.81 8.63 12 2 9.19 8.63 
         2 9.24 7.46 13.97 5.82 21z"
    />
  </svg>
</template>

<script setup>
// No script needed
</script>

<style scoped>
/* optional: add hover animation */
svg {
  transition: transform 0.3s;
}
svg:hover {
  transform: scale(1.2) rotate(15deg);
}
</style>
