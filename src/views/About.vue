<template>
  <!-- About Hero -->
  <section class="hero min-h-[85vh]">
    <div class="hero-text-content">
      <h1 class="text-5xl font-bold text-white">About Us</h1>
    </div>
  </section>
  <!-- About Details -->
  <section class="about-container container-pd">
    <div class="flex items-center justify-between">
      <div class="w-1/2">
        <img src="../assets/images/about-img.png" alt="about-us-image" />
      </div>
      <div class="about-wrapper w-1/2">
        <div class="detail-text w-[400px]">
          <h2 class="font-bold text-xl text-[#9A031E]">What we do...</h2>
          <div class="w-[400px] space-y-4">
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
    </div>
  </section>
  <!-- Talents Section -->
  <section class="container-pd">
    <div class="header w-full mx-auto">
      <h2 class="text-center font-bold text-xl text-[#9A031E]">
        Meet Our Talents
      </h2>
    </div>
    <div class="talents grid grid-cols-3 place-items-center gap-6">
      <TalentCard
        v-for="talent in talents"
        :talentName="talent.name"
        :talentRole="talent.role"
        :talentImage="talent.image"
      />
    </div>
    <div class="w-full flex flex-col justify-center items-center">
      <h3 class="text-xl font-semibold">Want to Join the Team</h3>
      <Button
        buttonText="Apply Here"
        buttonColor="bg-[#9A031E]"
        class="p-3 rounded text-white"
      />
    </div>
  </section>

  <!-- AI MODELS -->
  <section class="container-pd">
    <Slider />
  </section>
</template>

<script setup>
import TalentCard from "@/components/about/TalentCard.vue";
import Slider from "@/components/Slider.vue";
import { ref } from "vue";
import Button from "@/components/Button.vue";

import samuel from "../assets/images/talents/talent-samuel.png";
import iyiola from "../assets/images/talents/talent-iyiola.png";
import niyi from "../assets/images/talents/talent-niyi.png";
import tomiwa from "../assets/images/talents/talent-tomiwa.png";
import stanley from "../assets/images/talents/talent-stanley.png";

const talents = ref([
  {
    name: "Oludare Samuel",
    role: "Machine Learning Engineer, Team Lead",
    image: samuel,
  },
  {
    name: "Abdool Iyiola",
    role: "Designer",
    image: iyiola,
  },
  {
    name: "Agbedejobi Oluwagbeminiyi",
    role: "Backend Engineer",
    image: niyi,
  },
  {
    name: "Aderibigbe Oloruntomiwa",
    role: "Frontend Engineer",
    image: tomiwa,
  },
  {
    name: "Chinedu Stanley",
    role: "Data Analyst",
    image: stanley,
  },
]);
</script>

<style scoped>
.hero {
  min-width: 100%;
  background-image: url("../assets/images/about-hero.png");
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
