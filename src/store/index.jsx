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

// cart
export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id);
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            ),
          });
        } else {
          set({ cart: [...get().cart, { ...product, qty: 1 }] });
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },
      incrementQty: (id) => {
        set({
          cart: get().cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        });
      },
      decrementQty: (id) => {
        set({
          cart: get().cart.map((item) =>
            (item.id === id) & (item.qty > 1)
              ? {
                  ...item,
                  qty: item.qty - 1,
                }
              : item
          ),
        });
      },
    }),
    {
      name: "Cart Store",
    }
  )
);
