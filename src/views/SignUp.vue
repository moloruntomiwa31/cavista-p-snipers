<script setup>
import Form from "../components/Form.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import SelectOption from "@/components/SelectOption.vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useAuth } from "../composables/useAuth.js";
const { signUp } = useAuth();

const loading = ref(false);
const inputFields = ref([
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name...",
    value: "",
  },
  {
    label: "Email Address",
    type: "email",
    placeholder: "Enter your email...",
    value: "",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password...",
    eye: true,
    value: "",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Enter your password agin...",
    eye: true,
    value: "",
  },
]);
//options
const userRoleOptions = ref([
  "Medical Practitioner",
  "Patient",
  "HealthCare Administrator",
  "Others",
]);
//functions
const handleSignUp = async () => {
  loading.value = true;
  const keyMap = {
    Name: "username",
    "Email Address": "email",
    Password: "password1",
    "Confirm Password": "password2",
  };
  let formData = ref({});
  inputFields.value.forEach((element) => {
    const key = keyMap[element.label];
    formData.value[key] = element.value;
  });
  console.log(formData.value);
  await signUp(formData.value);
  loading.value = false;
};
</script>

<template>
  <main class="container-pd">
    <div class="header text-center">
      <h1 class="capitalize text-2xl font-bold">
        Ready to Explore Our AI Models
      </h1>
      <p>You're a step closer</p>
    </div>
    <Form class="py-8" @submit="handleSignUp">
      <fieldset class="grid grid-cols-2 gap-6 place-items-center">
        <Input
          v-for="input in inputFields"
          :labelText="input.label"
          :inputType="input.type"
          :placeholder="input.placeholder"
          :eye="input.eye"
          v-model.trim="input.value"
          class="border-[#9A031E] w-[400px]"
        />
        <SelectOption
          labelText="Role"
          placeholder="Select your role..."
          class="w-[400px]"
          :options="userRoleOptions"
        />
      </fieldset>
      <Button
        buttonText="Sign Up"
        buttonColor="bg-yellow-500"
        class="mx-auto block p-3 rounded mt-8"
        :loading="loading"
      />
    </Form>
    <p class="text-center py-4">
      Already have an account?<RouterLink
        to="/login"
        class="font-bold hover:text-[#9A031E] duration-150"
      >
        Log In</RouterLink
      >
    </p>
  </main>
</template>
<style scoped></style>
