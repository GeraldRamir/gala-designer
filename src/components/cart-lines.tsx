"use client";

import Link from "next/link";
import { products } from "@data/products";
import { Photo } from "@/components/photo";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/store/cart";

export function CartLines() {
  const lines = useCart((state) => state.lines);
  const hydrated = useCart((state) => state.hydrated);
  const setQty = useCart((state) => state.setQty);
  const remove = useCart((state) => state.remove);

  if (!hydrated) {
    return <p className="text-sm text-muted">Cargando tu carrito…</p>;
  }

  if (lines.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-muted">Tu carrito está vacío. Elige una pieza y vuelve.</p>
        <Link
          href="/coleccion"
          className="inline-flex bg-ink px-4 py-3 font-trap text-2xl tracking-[0.16em] text-ivory"
        >
          Ver colección
        </Link>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-ink/10">
      {lines.map((line) => {
        const product = products.find((item) => item.id === line.productId);
        if (!product) return null;
        return (
          <li key={line.key} className="flex gap-3 py-4">
            <Link
              href={`/producto/${product.slug}`}
              className="relative block h-28 w-[4.5rem] shrink-0 bg-panel"
            >
              <Photo src={product.images[0]} alt="" sizes="72px" className="object-cover" />
            </Link>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold">{product.brand}</p>
                  <Link
                    href={`/producto/${product.slug}`}
                    className="block break-words text-sm uppercase tracking-wide"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs text-muted">Talla {line.size}</p>
                </div>
                <p className="shrink-0 text-sm">{formatPrice(product.price * line.quantity)}</p>
              </div>
              <div className="mt-3 flex items-center gap-3">
                <label className="sr-only" htmlFor={`qty-${line.key}`}>
                  Cantidad de {product.name}
                </label>
                <input
                  id={`qty-${line.key}`}
                  type="number"
                  min={1}
                  max={9}
                  value={line.quantity}
                  onChange={(event) => setQty(line.key, Number(event.target.value) || 1)}
                  className="w-16 border border-ink/15 bg-ivory px-2 py-2 text-base"
                />
                <button
                  type="button"
                  onClick={() => remove(line.key)}
                  className="text-xs uppercase tracking-[0.16em] text-muted hover:text-gold"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
