<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  labelText: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
  inputType: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  eye: {
    type: Boolean,
    default: false,
  },
});

const input = ref(null);

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  const newValue = event.target.value;
  emit("update:modelValue", newValue);
};
</script>

<template>
  <div class="grid rounded relative">
    <label v-if="labelText">{{ labelText }}</label>
    <input
      :value="modelValue"
      @input="updateInput($event)"
      :placeholder="placeholder"
      v-bind="$attrs"
      ref="input"
      required
      class="p-3 rounded shadow-md outline-none border-2 duration-200"
    />
    <Icon
      icon="mdi:eye"
      style="color: #9a031e"
      height="28px"
      v-if="eye"
      class="absolute bottom-3 right-6 cursor-pointer"
      @click="input.type = input.type === 'password' ? 'text' : 'password'"
    />
  </div>
</template>

<style>
label:after {
  content: " *";
  color: #9a031e;
  white-space: nowrap;
}
label {
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
input::placeholder {
  color: #2e2d2d;
}
</style>
