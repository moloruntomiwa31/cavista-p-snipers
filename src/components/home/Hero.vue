<template>
  <div class="md:w-3/4">
    <div class="min-w-[400px] w-[600px] space-y-4 py-6">
      <h1 class="text-[#9A031E] text-4xl font-bold">Patient Safety</h1>
      <p class="w-[500px] font-semibold text-xl">
        With the use of our AI models, be rest assured to get accurate reports
        on different diagnosis.
      </p>
      <div>
        <Button
          buttonText="Model for Medical Practitioners"
          buttonColor="bg-[#9A031E]"
          class="p-3 rounded-xl shadow min-w-fit w-[240px] max-w-[300px] text-white whitespace-nowrap"
        />
        <Button
          buttonText="Model for Patients"
          buttonColor="bg-yellow-400"
          class="p-3 rounded-xl shadow min-w-fit w-[240px] max-w-[300px] text-black ml-6"
        />
      </div>
    </div>
  </div>
  <div class="md:w-1/4">
    <img
      src="../../assets/images/hero-img.png"
      alt="medical-practioner"
      class="w-full"
    />
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style lang="scss" scoped></style>
