import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLogingIn: false,
  isUpdatingProfile: false,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check-auth");
      set({ authUser: response.data });
    } catch (error) {
      console.error("Error checking auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));

export default useAuthStore;