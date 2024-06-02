import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: { email: "", password: "", name: "" },
  setUser: (userData) => set({ user: userData }),
}));
