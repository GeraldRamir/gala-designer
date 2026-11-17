import { site } from "@config/site";
import { IconWhatsapp } from "@/components/icons";

export function WhatsappFloat() {
  return (
    <a
      href={site.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-lg transition hover:scale-105"
      aria-label="Escribir por WhatsApp a Gala Designer"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
