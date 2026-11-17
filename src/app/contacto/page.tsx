import type { Metadata } from "next";
import { site } from "@config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "WhatsApp, Instagram y ubicación de Gala Designer en Santo Domingo.",
};

export default function ContactoPage() {
  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <p className="font-trap text-[11px] uppercase tracking-[0.4em] text-gold">Hablemos</p>
      <h1 className="type-display mt-2">Contacto</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Hoy el pedido se cierra por WhatsApp. Escríbenos con la pieza, la talla y tu sector.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a
          href={site.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="bg-ink p-6 text-ivory transition hover:bg-gold hover:text-ink"
        >
          <p className="font-trap text-xs uppercase tracking-[0.28em]">WhatsApp</p>
          <p className="mt-2 font-display text-[clamp(1.8rem,7vw,2.6rem)] italic tracking-[0.04em]">
            Pedir ahora
          </p>
        </a>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="border border-ink/10 p-6 hover:border-gold"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Instagram</p>
          <p className="mt-2 break-words font-display text-[clamp(1.6rem,6vw,2.4rem)] tracking-[0.06em]">
            @{site.handle}
          </p>
        </a>
        <a
          href={site.instagramSecondary}
          target="_blank"
          rel="noreferrer"
          className="border border-ink/10 p-6 hover:border-gold"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Cuenta asociada</p>
          <p className="mt-2 break-words font-display text-[clamp(1.6rem,6vw,2.4rem)] tracking-[0.06em]">
            @{site.handleSecondary}
          </p>
        </a>
        <div className="border border-ink/10 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Ubicación</p>
          <p className="mt-2 font-display text-[clamp(1.6rem,6vw,2.2rem)] uppercase tracking-[0.06em]">
            {site.location}
          </p>
          <p className="mt-2 text-sm text-muted">{site.hours}</p>
        </div>
      </div>

      <section className="mt-14" aria-labelledby="faq">
        <h2 id="faq" className="type-display">
          Preguntas
        </h2>
        <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
          {site.faq.map((item) => (
            <details key={item.q} className="py-4">
              <summary className="cursor-pointer text-lg">{item.q}</summary>
              <p className="pt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
