import type { Metadata } from "next";
import { ShopBrowser } from "@/components/shop-browser";

export const metadata: Metadata = {
  title: "Colección",
  description: "Catálogo de sneakers, ropa, accesorios y perfumes de diseñador en Gala Designer.",
};

export default function ColeccionPage() {
  return (
    <div className="pt-8">
      <div className="relative overflow-hidden px-4 md:px-8">
        <p className="pointer-events-none absolute -right-4 top-0 select-none font-trap text-[18vw] leading-none text-ink/[0.05]">
          DROP
        </p>
        <p className="font-trap text-[11px] uppercase tracking-[0.4em] text-gold">El closet</p>
        <h1 className="type-display mt-2">Colección</h1>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Prada, Amiri, Casablanca, Louis Vuitton. Precios de ejemplo en RD$; ajústalos en data/products.ts.
        </p>
      </div>
      <ShopBrowser category="all" />
    </div>
  );
}
