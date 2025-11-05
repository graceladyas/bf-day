<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 2C10 2 6 6 6 10c0 2.5 2.5 6.5 6 10 
         3.5-3.5 6-7.5 6-10 0-4-4-8-6-8zm0 18c-1 
         0-2-.5-3-1.5l1-1c.8.7 1.5 1.2 2 1.5.5-.3 
         1.2-.8 2-1.5l1 1c-1 1-2 1.5-3 1.5z"
    />
  </svg>
</template>

<script setup>
// No script needed
</script>

<style scoped>
svg {
  transition: transform 0.3s;
}
svg:hover {
  transform: scale(1.2) translateY(-5px);
}
</style>
