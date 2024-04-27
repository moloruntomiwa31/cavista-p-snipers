<template>
  <div class="header w-full mx-auto py-8">
    <h2 class="text-center font-bold text-xl text-[#9A031E]">AI Models</h2>
    <div class="text-center">
      <p>Guess what? Our AI Models is a solution for precaution</p>
      <p class="font-bold">Here is what our Experts have to say</p>
    </div>
    <Swiper
      :modules="[EffectCube, Autoplay, Pagination]"
      :cube-effect="{
        shadow: false,
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      effect="card"
      :loop="true"
      :pagination="true"
    >
      <SwiperSlide v-for="data in datas">
        <SwipedCard
          :image="data.image"
          :details="data.details"
          :text="data.text"
        />
      </SwiperSlide>
    </Swiper>
    <Button
      buttonText="See models"
      buttonColor="bg-[#9A031E]"
      class="mx-auto block my-4 p-4 rounded-md text-white"
    />
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import SwipedCard from "@/components/SwipedCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css";

import samuel from "../assets/images/talents/talent-samuel.png";
import iyiola from "../assets/images/talents/talent-iyiola.png";
import niyi from "../assets/images/talents/talent-niyi.png";
import { ref } from "vue";
const datas = ref([
  {
    image: samuel,
    details:
      "AI has revolutionized healthcare by enabling precision medicine tailored to individual patients. Through analysis of genetic data, medical records, and lifestyle factors, AI algorithms can predict disease risks, recommend personalized treatment plans, and optimize medication dosages. ",
    text: "Oludare Samuel, Team Lead",
  },
  {
    image: iyiola,
    details:
      "AI is accelerating the drug discovery and development process by analyzing vast datasets, simulating molecular interactions, and predicting drug candidates with high efficacy and safety profiles.",
    text: "Abduool Iyiola, Designer",
  },
  {
    image: niyi,
    details:
      "AI-powered mental health tools are providing valuable support by analyzing speech patterns, facial expressions, and text data to detect signs of mental health disorders such as depression and anxiety. ",
    text: "Agbedejobi Oluwagbeminiyi, Backend Engineer",
  },
]);
</script>

<style scoped>
.swiper {
  min-width: 80%;
  height: 400px;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #fff;
  opacity: 1;
}
:global(.swiper-pagination-bullet-active) {
  background-color: #9a031e !important;
}
</style>
