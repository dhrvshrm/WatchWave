import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: { email: "", password: "", displayName: "" },
  setUser: (userData) => set({ user: userData }),
}));
