import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("useUserStore", () => {
  const user = ref(null);
  const userKey = ref(null);
  const setUser = (data) => {
    user.value = data;
  };
  const setUserKey = (key) => {
    userKey.value = key;
  };
  return { user, setUser, userKey, setUserKey };
});
