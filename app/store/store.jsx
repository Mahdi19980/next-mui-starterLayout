import { create } from "zustand";

export const useStore = create((set) => ({
  mode: true,
  setMode: (action) => set((state) => ({ mode: !state.mode })),
}));
