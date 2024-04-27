<script setup>
import { RouterLink } from "vue-router";
import Form from "../components/Form.vue";
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
const { logIn } = useAuth();

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
]);

//functions
const handleLogIn = async () => {
  loading.value = true;
  const keyMap = {
    Name: "username",
    "Email Address": "email",
    Password: "password",
  };
  let formData = ref({});
  inputFields.value.forEach((element) => {
    const key = keyMap[element.label];
    formData.value[key] = element.value;
  });
  await logIn(formData.value);
  loading.value = false;
};
</script>

<template>
  <main class="container-pd">
    <div class="header text-center">
      <h1 class="capitalize text-2xl font-bold">Okay, we recognize you</h1>
      <p>Enter your details</p>
    </div>

    <!-- LOGIN FORM -->
    <Form
      class="min-h-[60vh] flex flex-col justify-center items-center"
      @submit="handleLogIn"
    >
      <fieldset class="grid gap-6 place-items-center">
        <Input
          v-for="input in inputFields"
          :labelText="input.label"
          :inputType="input.type"
          :placeholder="input.placeholder"
          :eye="input.eye"
          v-model.trim="input.value"
          class="border-[#9A031E] w-[400px]"
        />
      </fieldset>
      <Button
        buttonText="Log In"
        buttonColor="bg-yellow-500"
        class="mx-auto block p-3 rounded mt-8"
        :loading="loading" 
      />
    </Form>
    <p class="text-center py-4">
      Don't have an account?<RouterLink
        to="/signup"
        class="font-bold hover:text-[#9A031E] duration-150"
      >
        Sign Up</RouterLink
      >
    </p>
  </main>
</template>
<style scoped></style>
