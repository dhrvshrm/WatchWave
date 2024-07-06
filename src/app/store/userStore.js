import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: { email: "", password: "", displayName: "", accessToken: "" },
  setUser: (userData) => set({ user: userData }),
  setUserLoginAccessToken: (accessToken) =>
    set((state) => ({ user: { ...state.user, accessToken } })),
}));
