<template>
  <div class="sticky-container">
    <div class="relative">
      <button @click="submit" class="send-btn w-full rounded-lg font-semibold text-sm text-white p-4 bg-primary">
        Lanjutkan
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

<style scoped>
 .sticky-container {
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 100%; /* Ensure it spans the full width of the container */
  margin-top: auto; /* Push it to the bottom of the layout */
}

.bg-primary {
  background-color: #FF9015; 
  color: white; 
}

.send-btn{
  padding: 10px 0px;
  font-size: 14px;
  color: white;
  text-align: center;
  font-family: 'Nunito', sans-serif; 
}
</style>
