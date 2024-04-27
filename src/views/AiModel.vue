<template>
  <div>
    <!-- AI Model Hero -->
    <section class="hero min-h-[85vh]">
      <div class="hero-text-content">
        <h1 class="text-5xl font-bold text-white">AI Model</h1>
      </div>
    </section>
    <!-- AI MODEL DETAILS -->
    <section class="models-wrapper container-pd">
      <ModelDetails
        v-for="data in datas"
        :image="data.image"
        :text="data.text"
        :linkText="data.linkText"
        :reverse="data.reverse"
      />
    </section>

    <!-- AI MODELS -->
    <section class="container-pd">
      <Slider />
    </section>
  </div>
</template>

<script setup>
import medicalPractitioner from "../assets/images/hero-img.png";
import patient from "../assets/images/about-img.png";
import ModelDetails from "../components/aimodel/ModelDetails.vue";
import Slider from "@/components/Slider.vue";
import { ref } from "vue";

const datas = ref([
  {
    image: medicalPractitioner,
    text: "This AI Model is designed only for Medical Practitioners such as Medical Doctors, Nurses, Pharmacists, and so on. To have credible reports that improves the outcome of the healthcare sector.",
    reverse: false,
    linkText: "Ready to explore>>>",
  },
  {
    image: patient,
    text: "This AI Model is designed only for Patients understand the status of their health before coming to the hospital to consult a doctor or any other professional in the healthcare sector. It is a tool to keep patients informed always.",
    reverse: true,
    linkText: "Coming soon...",
  },
]);
</script>

<style scoped>
.hero {
  min-width: 100%;
  background-image: url("../assets/images/aimodel-hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.hero-text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
