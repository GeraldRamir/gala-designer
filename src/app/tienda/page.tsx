import type { Metadata } from "next";
import { site } from "@config/site";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "La tienda",
  description: "Visita Gala Designer en Santo Domingo. Estantes iluminados, denim y sneakers de diseñador.",
};

export default function TiendaPage() {
  return (
    <div className="pt-8">
      <div className="px-4 md:px-8">
        <p className="font-trap text-[11px] uppercase tracking-[0.4em] text-gold">Santo Domingo</p>
        <h1 className="type-display mt-2">La tienda</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Madera, luz cálida y piezas listas para llevar. Confirma el horario por WhatsApp antes de pasar.
        </p>
      </div>

      <div className="mt-8 grid gap-2 px-2 md:grid-cols-3 md:px-4">
        {site.experienceImages.slice(0, 3).map((photo) => (
          <div key={photo.src} className="relative aspect-[4/5] overflow-hidden bg-panel">
            <Photo src={photo.src} alt={photo.alt} sizes="(max-width: 768px) 100vw, 33vw" />
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 px-4 pb-16 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Ubicación</p>
          <p className="mt-2 font-display text-[clamp(1.8rem,6vw,2.8rem)] uppercase tracking-[0.08em]">
            {site.address}
          </p>
          <p className="mt-4 text-sm">{site.hours}</p>
          <p className="text-xs text-muted">{site.hoursNote}</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex bg-ink px-5 py-3 font-trap text-xl tracking-[0.18em] text-ivory hover:bg-gold hover:text-ink"
          >
            Cómo llegar
          </a>
        </div>
        <div className="overflow-hidden border border-gold/20 bg-panel">
          <iframe
            title="Mapa de Gala Designer en Santo Domingo"
            src={site.mapsEmbed}
            className="h-[320px] w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="px-4 py-3 text-xs text-muted">
            Mapa placeholder. Sustituye la URL de embed en config/site.ts cuando tengas la dirección exacta.
          </p>
        </div>
      </div>
    </div>
  );
}
