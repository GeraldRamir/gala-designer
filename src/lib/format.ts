export function formatPrice(value: number) {
  return `RD$${value.toLocaleString("en-US")}`;
}

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
