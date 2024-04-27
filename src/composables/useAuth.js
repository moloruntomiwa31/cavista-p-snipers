import axios from "axios";
import { useToast } from "@/stores/toast";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

export function useAuth() {
  const toast = useToast();
  const user = useUserStore();
  const router = useRouter();

  const signUp = async (formData) => {
    try {
      const res = await axios.post(
        "https://cavismed.onrender.com/api/v1/dj-rest-auth/registration/",
        formData
      );
      if (res) {
        //addToast and push to login page
        toast.addToast("Signed up successfully, log in now!", "success");
        router.push("/login");
      }
    } catch (err) {
      toast.addToast("An Error Occurred", "error");
    }
  };
  const logIn = async (formData) => {
    try {
      const res = await axios.post(
        "https://cavismed.onrender.com/api/v1/dj-rest-auth/login/",
        formData
      );
      if (res) {
        //setUser, raddToast and push to home page
        user.setUser(res.config.data);
        user.setUserKey(res.data.key);
        toast.addToast("Logged in successfully", "success");
        router.push("/");
      }
    } catch (err) {
      toast.addToast("An Error Occurred", "error");
    }
  };
  return { signUp, logIn };
}
