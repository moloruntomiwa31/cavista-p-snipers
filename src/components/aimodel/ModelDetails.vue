<template>
  <div class="flex items-center relative" :class="{ 'flex-row-reverse': reverse }">
    <div class="z-20">
      <img :src="image" :alt="image" />
    </div>
    <div class="relative w-[600px] min-h-[200px] bg-gray-300 p-6 ml-[-1rem] rounded-md" :class="{'mr-[-1rem]' : reverse}">
      <p class="text-lg">{{ text }}</p>
      <p class="text-yellow-600 font-bold absolute" :class="{'bottom-1 right-2': !reverse}">{{ linkText }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  text: String,
  linkText: String,
  reverse: Boolean,
});
</script>

<style scoped></style>
