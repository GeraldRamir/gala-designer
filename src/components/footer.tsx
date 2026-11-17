import Link from "next/link";
import { site } from "@config/site";
import { IconGlobe } from "@/components/icons";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-white md:px-10">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-trap text-3xl tracking-[0.08em]">
            <IconGlobe className="h-8 w-8" />
            GALA
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/65">{site.description}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tienda" className="hover:underline">
                Tienda
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Hablemos</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={site.whatsappLink} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                @{site.handle}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-4 pb-8 text-xs text-white/45 md:flex-row md:justify-between">
        <p>© 2026 Gala Designer</p>
        <p>Pedidos por WhatsApp</p>
      </div>
    </footer>
  );
}
