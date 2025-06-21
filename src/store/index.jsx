import { create } from "zustand";

export const baseUrl = create(() => ({
  URL: "http://localhost:1337",
}));
// product store
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));
