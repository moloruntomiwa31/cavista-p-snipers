<template>
  <footer
    class="bg-[#9a031e] md:min-h-[150px] w-full flex items-center justify-center container-pd"
  >
    <div class="md:w-1/4">
      <img
        src="../assets/images/app-logo.png"
        alt="app-logo"
        class="md:w-[10rem]"
      />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 md:w-3/4">
      <div class="grid gap-4">
        <RouterLink :to="link.to" v-for="link in footerLinks">{{
          link.name
        }}</RouterLink>
        <a
          href="https://public.tableau.com/views/PREDICTIONDATASET/Dashboard3?:language=en-GB&publish=yes&:sid=CD18AA06EECF4C5483AB6FA9B0286977-0:0&:display_count=n&:origin=viz_share_link"
          >Tableau Visualization</a
        >
        <a href="#">NewsLetter</a>
      </div>
      <div class="grid">
        <a href="#">Training</a>
        <a href="#">Meet the Team</a>
      </div>
      <div class="space-y-4 mt-4 md:mt-0">
        <h4 class="text-white">
          Want to receive the latest from our Newsletter?
        </h4>
        <Input
          placeholder="Enter your email..."
          class="bg-transparent placeholder:text-white text-white"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Input from "./Input.vue";
const footerLinks = ref([
  { name: "About", to: "/about" },
  { name: "AI Models", to: "/aimodel" },
  { name: "Contact", to: "/contact" },
]);
</script>

<style scoped>
a {
  color: white;
}
</style>
