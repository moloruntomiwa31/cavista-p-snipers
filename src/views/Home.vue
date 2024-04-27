<script setup>
import Hero from "@/components/home/Hero.vue";
import Button from "@/components/Button.vue";
import Slider from "@/components/Slider.vue";
</script>

<template>
  <main class="container-pd">
    <!-- HERO -->
    <section class="flex flex-col md:flex-row items-center hero">
      <Hero />
    </section>

    <!-- ABOUT -->
    <section class="about-container container-pd">
      <div class="header w-full mx-auto">
        <h2 class="text-center font-bold text-xl text-[#9A031E]">About Us</h2>
      </div>

      <div class="about-details-wrapper flex-space-between flex-col md:flex-row py-8 w-full">
        <div class="md:w-2/5">
          <img src="../assets/images/about-img.png" alt="about-image" />
        </div>
        <div class="3/5">
          <div class="w-[400px] space-y-4 text-center md:text-left">
            <p>
              CavMed is an initiative that uses AI models to improve healthcare
              outcomes within the healthcare sector fostering accuracy, halting
              the death rate in illness such as diabetes, heart failure and lung
              disease.
            </p>
            <p>
              The idea was crafted by a team of 5 from the University Of Lagos
              with the aim of improving the health care sectors in Nigeria using
              AI.
            </p>
            <Button
              buttonText="Meet The Team"
              buttonColor="bg-[#9A031E]"
              class="p-3 rounded-md shadow text-white"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- AI MODELS -->
    <section class="container-pd">
      <Slider />
    </section>
  </main>
</template>

<style scoped>
</style>
