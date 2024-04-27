<template>
  <button
    :class="buttonColor"
    v-bind="$attrs"
    @click="click"
    class="font-semibold outline-none hover:opacity-90 duration-100 shadow-md"
  >
    <img src="../assets/ring-spinner.gif" alt="ring-spinner" v-if="loading" class="w-6 inline"/>
    <span> {{ buttonText }} </span>
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
  buttonColor: String,
  loading: Boolean,
});
const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
</script>

<style scoped></style>
