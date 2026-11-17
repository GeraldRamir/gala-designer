import { site } from "@config/site";
import { formatPrice } from "@/lib/format";

export function whatsappBase() {
  if (site.phoneE164) {
    const digits = site.phoneE164.replace(/\D/g, "");
    return `https://wa.me/${digits}`;
  }
  return site.whatsappLink;
}

export function whatsappLink(message: string) {
  const base = whatsappBase();
  const sep = base.includes("?") ? "&" : "?";
  return `${base}${sep}text=${encodeURIComponent(message)}`;
}

export function productUrl(slug: string) {
  const origin = typeof window !== "undefined" ? window.location.origin : site.url;
  return `${origin}/producto/${slug}`;
}

export function productMessage(input: {
  brand: string;
  name: string;
  size: string;
  price: number;
  slug: string;
  soldOut?: boolean;
}) {
  if (input.soldOut) {
    return `Hola Gala Designer 🖤, quiero saber si vuelve: ${input.brand} ${input.name} – Talla ${input.size}. ${productUrl(input.slug)}`;
  }
  return `Hola Gala Designer 🖤, me interesa: ${input.brand} ${input.name} – Talla ${input.size} – ${formatPrice(input.price)}. ${productUrl(input.slug)}`;
}

export function orderMessage(input: {
  lines: Array<{ name: string; brand: string; size: string; quantity: number; price: number }>;
  name: string;
  zone: string;
  delivery: string;
  note?: string;
}) {
  const items = input.lines
    .map(
      (line) =>
        `• ${line.brand} ${line.name} – Talla ${line.size} ×${line.quantity} – ${formatPrice(line.price * line.quantity)}`,
    )
    .join("\n");
  const total = input.lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const note = input.note?.trim() ? `\nNota: ${input.note.trim()}` : "";
  return `Hola Gala Designer 🖤, quiero este pedido:\n${items}\nTotal: ${formatPrice(total)}\nNombre: ${input.name}\nSector/ciudad: ${input.zone}\nEntrega: ${input.delivery}${note}`;
}
