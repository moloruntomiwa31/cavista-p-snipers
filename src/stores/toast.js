import { defineStore } from "pinia";
import { acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useToast = defineStore("useToast", () => {
  const showToast = ref(false);
  const toastText = ref("");
  const bgColor = ref("");
  const icon = ref("");

  const addToast = (text, status) => {
    showToast.value = true;
    toastText.value = text;
    switch (status) {
      case "success":
        bgColor.value = "#1A4D2E";
        icon.value = "mdi:success-circle";
        break;
      case "error":
        bgColor.value = "#C40C0C";
        icon.value = "fluent-mdl2:status-error-full";
        break;
      case "info":
        bgColor.value = "#FFC100";
        icon.value = "material-symbols:error";
        break;
    }
    setTimeout(() => {
      showToast.value = false;
      toastText.value = "";
      bgColor.value = "";
    }, 4000);
  };
  return { showToast, addToast, bgColor, toastText, icon };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useToast, import.meta.hot));
}
