<script setup>
import { RouterView } from "vue-router";
import { storeToRefs } from "pinia";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import Toast from "./components/Toast.vue";
import { useToast } from "./stores/toast";
const toast = useToast();
const { showToast } = storeToRefs(toast);
</script>

<template>
  <Toast v-show="showToast" />
  <header class="px-12 py-4 bg-gray-400 w-full">
    <NavBar />
  </header>

  <RouterView />

  <Footer />
</template>

<style scoped></style>
