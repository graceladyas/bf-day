<template>
  <div class="page-container">
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>


<style scoped>
.ol {
  list-style-type: decimal; /* Ensure numbering is shown */
}
.sticky-container {
  background-color: white;
  padding: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 100%;
  margin-top: auto;
}

/* Main Page Container */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full viewport height */
}

/* Content Section */
.content {
  flex-grow: 1; /* Push the footer down */
  padding: 16px;
}

/* Footer Section */
.footer {
  position: sticky; /* Always visible at the bottom */
  bottom: 0;
  background-color: rgb(255, 255, 255);
  padding: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0px;
}
.bg-primary {
  background-color: #ff9015;
  color: white;
}
.centered-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontally center */
  justify-content: center; /* Vertically center */
  text-align: center; /* Optional for centering text inside spans */
}
.centered-content-1 {
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Center the items vertically (if needed) */
  gap: 10px; /* Optional: Adds space between the buttons */
  margin-bottom: 50px;
}
.centered-content-2 {
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Center the items vertically (if needed) */
  gap: 10px;
}

.left-content {
  display: flex;
  flex-direction: column;
  align-items: left; /* Horizontally center */
  justify-content: left; /* Vertically center */
  height: 100%; /* Set height to container or parent element size */
  text-align: left; /* Optional for centering text inside spans */
  margin-left: 20px;
  margin-bottom: 20px;
}
.test {
  margin-left: 20px
}

.send-btn {
  padding: 10px 0px;
  font-size: 14px;
  color: white;
  text-align: center;
}
.bg-orange {
  background: #ff9015;
}

.custom-border {
  border-color: #e5e7eb;
}

.orange-border {
  border-color: #ff9015;
}

.position-relative {
  position: relative;
}

.center-label {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.label-text {
  font-size: 20px;
  color: #000000;
}

.label {
  position: absolute;
  top: 0.82em;
  right: 0.4em;
  bottom: 0.4em;
  left: 0.4em;
  display: block;
  background: none;
  border-radius: 50%;
  color: #7f8c8d;
  font-size: 0.25em;
  line-height: 2.6em;
  text-align: center;
  cursor: default;
  z-index: 2;
}

/* .shadow {
  width: 100%;
  height: 100%;
  border: 0.05em solid hsl(20, 7%, 92%);
  border-radius: 50%;
} */
.shadow-button {
  width: 100%;
  height: 100%;
  border: 0.05em solid hsl(29, 100%, 84%);
}

.shadow-orange {
  width: 100%;
  height: 100%;
  border: 0.05em solid FF9015;
  border-radius: 50%;
}

.shadow-button-orange {
  width: 100%;
  height: 100%;
  border: 0.05em solid #ff9015;
}

.smaller {
  padding-bottom: 50px;
  color: #ff9015;
  vertical-align: super;
}

.button-block .sqs-block-button-element {
  color: black !important;
  border: 2.22px dashed #000000 !important;
  padding: 10px 44px !important;
}

.button2 {
  border: 1px dashed #dedede;
  color: rgb(245, 242, 242);
  padding: 10px 32px 10px 14px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.bg-top {
  background: #fef6ee;
}

.text-top {
  color: #1f272e;
}

.text-top-day {
  color: #ff9015;
}
.color-muted {
  color: #f1f3f5;
}

.text-gray-top {
  color: #707678;
}

.bg-tnc {
  background: #f8f9fb;
}

.bg-progress {
  background: #f1f3f5;
}

.text-tnc {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
}

.text-bold-tnc {
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
}

.margin-pic {
  margin-top: -8px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

/* li {
  margin-top: -10px;
} */

.custom-text-center {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  display: block;
  font-family: "Nunito", sans-serif;
  color: #707678;
}
.custom-card {
  margin-bottom: 120px;
}
.custom-text {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
}
.text-pdp {
  font-family: "Nunito", sans-serif;
}

.custom-prd {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: -5px;
}

.custom-text-4 {
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f272e;
}
.custom-text-center {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f272e;
}

.custom-text-3 {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  /* margin-bottom: 40px */
}

.custom-number {
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  /* margin-bottom: -200px; */
  /* display: block; */
}
.custom-bottom-1 {
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1f272e;
}
/* ONPDPACCEPT */
</style>
