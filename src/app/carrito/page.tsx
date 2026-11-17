import type { Metadata } from "next";
import { CartPage } from "@/components/cart-page";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Revisa tu pedido y finalízalo por WhatsApp con Gala Designer.",
};

export default function CarritoRoute() {
  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <p className="text-xs uppercase tracking-[0.22em] text-gold">Pedido</p>
      <h1 className="type-display">Carrito</h1>
      <div className="mt-8">
        <CartPage />
      </div>
    </div>
  );
}
