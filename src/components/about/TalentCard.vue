<template>
  <div class="w-[300px] p-4">
    <figure>
      <img :src="talentImage" :alt="talentName" />
      <figcaption class="text-center space-y-2">
        <h2 class="font-bold text-base">{{ talentName }}</h2>
        <p class="text-sm">{{ talentRole }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
defineProps({
  talentName: String,
  talentRole: String,
  talentImage: String,
});
</script>

<style scoped>
h2,
p {
  color: #9a031e;
}
</style>
