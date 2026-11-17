"use client";

import { useMemo, useState } from "react";
import { site } from "@config/site";
import { products } from "@data/products";
import { formatPrice } from "@/lib/format";
import { orderMessage, whatsappLink } from "@/lib/whatsapp";
import { useCart } from "@/store/cart";

export function CheckoutForm({ compact = false }: { compact?: boolean }) {
  const lines = useCart((state) => state.lines);
  const hydrated = useCart((state) => state.hydrated);
  const [name, setName] = useState("");
  const [zone, setZone] = useState("");
  const [delivery, setDelivery] = useState<string>(site.deliveryOptions[0].label);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const detailed = useMemo(
    () =>
      lines.flatMap((line) => {
        const product = products.find((item) => item.id === line.productId);
        if (!product) return [];
        return [
          {
            brand: product.brand,
            name: product.name,
            size: line.size,
            quantity: line.quantity,
            price: product.price,
          },
        ];
      }),
    [lines],
  );

  const total = detailed.reduce((sum, line) => sum + line.price * line.quantity, 0);

  if (!hydrated) {
    return <p className="text-sm text-muted">Cargando tu pedido…</p>;
  }

  if (detailed.length === 0) return null;

  function submit() {
    if (!name.trim() || !zone.trim()) {
      setError("Pon tu nombre y el sector o la ciudad.");
      return;
    }
    setError("");
    const href = whatsappLink(
      orderMessage({
        lines: detailed,
        name: name.trim(),
        zone: zone.trim(),
        delivery,
        note,
      }),
    );
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className="space-y-3"
      onSubmit={(event) => {
        event.preventDefault();
        submit();
      }}
    >
      <p className="flex items-baseline justify-between font-display text-3xl tracking-[0.08em]">
        <span>Total</span>
        <span className="text-gold">{formatPrice(total)}</span>
      </p>
      <label className="block text-xs uppercase tracking-[0.16em] text-muted">
        Nombre
        <input
          required
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full border border-ink/15 bg-ivory px-3 py-3 text-base normal-case tracking-normal text-ink"
        />
      </label>
      <label className="block text-xs uppercase tracking-[0.16em] text-muted">
        Ciudad o sector
        <input
          required
          name="zone"
          autoComplete="address-level2"
          value={zone}
          onChange={(event) => setZone(event.target.value)}
          placeholder="Ej. Piantini, Santo Domingo"
          className="mt-1 w-full border border-ink/15 bg-ivory px-3 py-3 text-base normal-case tracking-normal text-ink"
        />
      </label>
      <fieldset>
        <legend className="text-xs uppercase tracking-[0.16em] text-muted">Entrega</legend>
        <div className="mt-2 grid gap-2">
          {site.deliveryOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="delivery"
                value={option.label}
                checked={delivery === option.label}
                onChange={() => setDelivery(option.label)}
              />
              {option.label}
            </label>
          ))}
        </div>
      </fieldset>
      {compact ? null : (
        <label className="block text-xs uppercase tracking-[0.16em] text-muted">
          Nota (opcional)
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={2}
            className="mt-1 w-full border border-ink/15 bg-ivory px-3 py-3 text-base normal-case tracking-normal text-ink"
          />
        </label>
      )}
      {error ? (
        <p className="text-sm text-gold" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="w-full bg-ink px-4 py-4 font-trap text-2xl tracking-[0.16em] text-ivory hover:bg-gold hover:text-ink"
      >
        Finalizar pedido por WhatsApp
      </button>
      <p className="text-xs text-muted">{site.paymentNote}</p>
    </form>
  );
}
