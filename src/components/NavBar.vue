<template>
  <nav class="flex-space-between min-w-full">
    <div>
      <img
        src="../assets/images/app-logo.png"
        alt="app-logo"
        class="w-[10rem]"
      />
    </div>
    <div>
      <RouterLink
        :to="link.to"
        v-for="link in links"
        class="hover:text-[#9A031E]"
        active-class="active"
        >{{ link.name }}</RouterLink
      >
      <a
        target="_blank"
        class="hover:text-[#9A031E]"
        href="https://public.tableau.com/views/PREDICTIONDATASET/Dashboard3?:language=en-GB&publish=yes&:sid=CD18AA06EECF4C5483AB6FA9B0286977-0:0&:display_count=n&:origin=viz_share_link"
        >Tableau Visualization</a
      >
      <div class="dropdown">
        <RouterLink to="/aiModel" class="dropbtn" active-class="active"
          >AIModel</RouterLink
        >
        <div class="dropdown-content">
          <a href="#" class="dropbtn-med">AIModel for Medical Practitioners</a>
          <div class="dropdown-md-content">
            <a
              v-for="link in medlinks"
              :href="link.href"
              :class="{ disabled: !user.userKey }"
              target="_blank"
              >{{ link.text }}</a
            >
          </div>
          <a href="#">AIModel for Patients</a>
        </div>
      </div>
      <RouterLink to="/contact" active-class="active">Contact</RouterLink>
    </div>
    <Button
      @click="router.push('/signup')"
      buttonColor="bg-yellow-500"
      buttonText="Sign Up"
      class="p-3 rounded-xl shadow min-w-fit"
    />
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { RouterLink } from "vue-router";
import Button from "./Button.vue";

const router = useRouter();
const user = useUserStore();
const links = ref([
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
]);
const medlinks = ref([
  {
    href: "https://cavista-diabetes-prediction-model.streamlit.app/",
    text: "Diabetes",
    disabled: true,
  },
  {
    href: "https://cavista-heart-diseases-pred.streamlit.app/",
    text: "Heart Disease",
    disabled: true,
  },
  {
    href: "https://cavista-lung-diseases-pred-model.streamlit.app/",
    text: "Lung Disease",
    disabled: true,
  },
]);
</script>

<style scoped>
a {
  margin-right: 2rem;
  white-space: nowrap;
  min-width: 100%;
}
.active {
  text-decoration: underline;
  color: #9a031e;
  font-weight: 800;
}
/* Dropdown Button */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1.3rem;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  widows: 100%;
}

.dropdown-content a:hover {
  background-color: #9a031e;
  color: white;
  border-radius: 1.3rem;
}

.dropdown-md-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 1.3rem;
}

.dropdown-content .dropbtn-med:hover + .dropdown-md-content,
.dropdown-md-content:hover {
  display: block;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/* Dropdown Button */
.disabled {
  color: grey;
  pointer-events: none;
}
</style>
