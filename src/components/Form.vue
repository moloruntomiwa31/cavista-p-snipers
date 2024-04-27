<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<script setup>
const emit = defineEmits(["submit"]);
const submit = () => {
    emit("submit");
}
</script>

<style scoped></style>
