<template>
  <div class="flex items-center justify-center my-4">
    <div class="image">
      <img :src="image" alt="Image" />
    </div>
    <div
      class="relative p-4 rounded-md bg-[#9A031E] min-h-[150px] max-h-fit w-[600px] ml-[-3rem]"
    >
      <p class="text-white">
        {{ details }}
      </p>
      <h4 class="absolute bottom-4 right-4 text-yellow-500 font-bold text-lg">
        {{ text }}
      </h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  details: String,
  text: String,
});
</script>

<style lang="scss" scoped></style>
