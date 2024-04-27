<template>
  <div class="grid">
    <label v-if="labelText" class="text-white-primary font-semibold text-md">{{
      labelText
    }}</label>
    <select
      class="border-2 duration-150 outline-none focus:outline-none rounded p-3 border-[#9A031E]"
      v-model="selectedOption"
      @change="handleOptionChange"
    >
      <option value="selected" class="hover:cursor-pointer">
        {{ placeholder }}
      </option>
      <option
        :value="option"
        v-for="option in options"
        class="hover:cursor-pointer"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref } from "vue";
const selectedOption = ref("selected");
const emit = defineEmits(["update:modelValue"]);
const handleOptionChange = () => {
  emit("update:modelValue", selectedOption.value);
};
defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  options: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
label:after {
  content: " *";
  color: #9a031e;
}
option:selected {
  color: #eee;
  background-color: blue;
}
option {
  background-color: #ee2b47;
  color: #fff;
  cursor: pointer;
}
select option:hover {
  background-color: #f5eded;
  color: #ee2b47;
  border: 1px solid #ee2b47;
  padding: 10px;
}
</style>
