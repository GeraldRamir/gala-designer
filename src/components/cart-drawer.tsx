"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CartLines } from "@/components/cart-lines";
import { CheckoutForm } from "@/components/checkout-form";
import { IconClose } from "@/components/icons";
import { useCart } from "@/store/cart";

export function CartDrawer() {
  const open = useCart((state) => state.drawerOpen);
  const close = useCart((state) => state.closeDrawer);
  const lines = useCart((state) => state.lines);
  const setHydrated = useCart((state) => state.setHydrated);

  useEffect(() => {
    const finish = () => setHydrated(true);
    const stored = useCart.persist;
    if (stored.hasHydrated()) {
      finish();
      return;
    }
    const unsub = stored.onFinishHydration(finish);
    void stored.rehydrate();
    return () => {
      unsub();
    };
  }, [setHydrated]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button type="button" className="absolute inset-0 bg-black/70" aria-label="Cerrar carrito" onClick={close} />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Carrito"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-ink/10 bg-white text-ink shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-4 py-4">
          <h2 className="font-trap text-3xl tracking-[0.18em]">TU PEDIDO</h2>
          <button type="button" onClick={close} aria-label="Cerrar" className="grid h-11 w-11 place-items-center">
            <IconClose className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <CartLines />
          {lines.length > 0 ? (
            <div className="border-t border-white/10 py-4">
              <CheckoutForm compact />
              <Link
                href="/carrito"
                onClick={close}
                className="mt-3 block text-center text-xs uppercase tracking-[0.16em] text-muted hover:text-gold"
              >
                Ver carrito completo
              </Link>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
