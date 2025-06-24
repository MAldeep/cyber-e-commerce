import { create } from "zustand";
import { persist } from "zustand/middleware";

export const baseUrl = create(() => ({
  URL: "http://localhost:1337",
}));
// product store
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));
// WishList
export const useWishList = create(
  persist(
    (set) => ({
      wishList: [],
      setWishList: (data) =>
        set((state) => {
          const newItems = Array.isArray(data) ? data : [data];
          const existingIds = new Set(state.wishList.map((item) => item.id));
          const filteredItems = newItems.filter(
            (item) => !existingIds.has(item.id)
          );
          return {
            wishList: [...state.wishList, ...filteredItems],
          };
        }),
      removeFromWishlist: (id) =>
        set((state) => ({
          wishList: state.wishList.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "Wishlist store",
    }
  )
);
