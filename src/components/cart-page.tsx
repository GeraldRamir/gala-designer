"use client";

import { CartLines } from "@/components/cart-lines";
import { CheckoutForm } from "@/components/checkout-form";
import { useCart } from "@/store/cart";

export function CartPage() {
  const lines = useCart((state) => state.lines);
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <CartLines />
      {lines.length > 0 ? (
        <div className="border border-ink/10 bg-panel p-5 lg:sticky lg:top-24 lg:self-start">
          <CheckoutForm />
        </div>
      ) : null}
    </div>
  );
}
