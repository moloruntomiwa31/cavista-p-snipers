<template>
  <div>
    <!-- Contact Hero -->
    <section class="hero min-h-[85vh]">
      <div class="hero-text-content">
        <h1 class="text-5xl font-bold text-white">Contact Us</h1>
      </div>
    </section>
    <!-- Contact Form -->
    <section class="px-12 py-8 grid place-items-center">
      <div class="text-center">
        <h2 class="text-xl font-bold">
          Hi there, we'll be happy to recieve your message
        </h2>
        <p class="text-base">Fill this form</p>
      </div>
      <Form>
        <fieldset class="space-y-8">
          <Input
            v-for="input in inputFields"
            :labelText="input.label"
            :inputType="input.type"
            :placeholder="input.placeholder"
            class="border-[#9A031E] w-[400px]"
          />
          <div class="grid">
            <label for="message">Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="border-2 rounded border-[#9A031E] w-[400px] focus:outline-none p-3 placeholder:text-[#2e2d2d]"
              placeholder="Leave us a message..."
            ></textarea>
          </div>
        </fieldset>
        <Button
          buttonText="Submit"
          buttonColor="bg-yellow-500"
          class="mx-auto block p-3 rounded mt-8"
        />
      </Form>
    </section>
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";

const inputFields = ref([
  {
    label: "Name",
    type: "text",
    placeholder: "Enter your name...",
    value: "",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Enter your email address...",
    value: "",
  },
]);
</script>

<style scoped>
.hero {
  min-width: 100%;
  background-image: url("../assets/images/contact-hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.hero-text-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
