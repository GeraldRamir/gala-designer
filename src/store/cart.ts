"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  key: string;
  productId: string;
  size: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
  drawerOpen: boolean;
  hydrated: boolean;
  add: (productId: string, size: string, quantity?: number) => void;
  setQty: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  setHydrated: (value: boolean) => void;
};

function lineKey(productId: string, size: string) {
  return `${productId}::${size}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      drawerOpen: false,
      hydrated: false,
      add: (productId, size, quantity = 1) => {
        const key = lineKey(productId, size);
        const existing = get().lines.find((line) => line.key === key);
        const lines = existing
          ? get().lines.map((line) =>
              line.key === key
                ? { ...line, quantity: Math.min(9, line.quantity + quantity) }
                : line,
            )
          : [...get().lines, { key, productId, size, quantity: Math.min(9, quantity) }];
        set({ lines, drawerOpen: true });
      },
      setQty: (key, quantity) => {
        const next = Math.max(1, Math.min(9, quantity));
        set({
          lines: get().lines.map((line) => (line.key === key ? { ...line, quantity: next } : line)),
        });
      },
      remove: (key) => set({ lines: get().lines.filter((line) => line.key !== key) }),
      clear: () => set({ lines: [] }),
      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
      setHydrated: (value) => set({ hydrated: value }),
    }),
    {
      name: "gala-designer-cart",
      skipHydration: true,
      partialize: (state) => ({ lines: state.lines }),
    },
  ),
);

export function useCartCount() {
  const hydrated = useCart((state) => state.hydrated);
  const lines = useCart((state) => state.lines);
  if (!hydrated) return 0;
  return lines.reduce((sum, line) => sum + line.quantity, 0);
}
