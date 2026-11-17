import Link from "next/link";
import { site } from "@config/site";
import { products } from "@data/products";
import { ArrivalMarquee } from "@/components/arrival-marquee";
import { BrandTicker } from "@/components/brand-ticker";
import { Photo } from "@/components/photo";
import { ProductCard } from "@/components/product-card";
import { IconGlobe } from "@/components/icons";

export default function HomePage() {
  const arrivals = products.filter((item) => item.isNew).slice(0, 8);
  const featured = products.filter((item) => item.isExclusive).slice(0, 4);
  const more = products.slice(8, 16);

  return (
    <div>
      <section className="relative overflow-hidden bg-white">
        <div className="relative h-[64vh] min-h-[420px] md:h-[74vh]">
          <Photo
            src="/images/ig/gala-043.jpg"
            alt="Interior de Gala Designer con logo dorado y denim"
            sizes="100vw"
            priority
            className="object-cover object-[50%_18%] brightness-[1.08] contrast-[1.08]"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-4 pb-5 pt-28 md:px-10 md:pb-7">
            <p className="font-trap text-[10px] tracking-[0.45em] text-[#d4af5a] md:text-[11px]">
              SANTO DOMINGO · STAGE
            </p>
            <h1 className="hero-gala mt-1 font-trap text-[34vw] leading-[0.72] text-[#f6f1ea] md:text-[10.5rem]">
              GALA
            </h1>
            <p
              className="-mt-2 pl-1 font-display text-2xl italic tracking-wide text-[#d4af5a] drop-shadow-[2px_2px_0_#111] md:-mt-3 md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Designer
            </p>
          </div>
        </div>
        <ArrivalMarquee />
      </section>

      <BrandTicker />

      <section className="bg-white px-4 py-10 md:px-8 md:py-14" aria-labelledby="nuevos">
        <h2 id="nuevos" className="sr-only">
          Nuevos ingresos
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-ink px-4 py-12 text-white md:px-8 md:py-16" aria-labelledby="featured">
        <h2
          id="featured"
          className="flex flex-wrap items-center gap-3 font-trap text-[12vw] leading-[0.85] tracking-[-0.04em] md:text-[7.5vw]"
        >
          PRODUCT
          <IconGlobe className="h-[0.7em] w-[0.7em]" />
          FEATURED
        </h2>
        <div className="mt-10 grid items-end gap-6 md:grid-cols-12">
          <div className="relative aspect-[4/5] md:col-span-4">
            <Photo src="/images/ig/gala-014.jpg" alt="Casablanca y Amiri" sizes="40vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] md:col-span-3 md:-mt-16">
            <Photo src="/images/ig/gala-004.jpg" alt="Prada, Burberry y Gala" sizes="30vw" className="object-cover" />
          </div>
          <div className="md:col-span-5 md:pb-4">
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              Las piezas que se piden para el stage: Prada, Amiri, Louis Vuitton y Casablanca.
              Si se ve en el video, se consigue aquí.
            </p>
            <Link
              href="/coleccion"
              className="mt-6 inline-flex bg-white px-6 py-3 text-sm font-medium text-ink"
            >
              Ver más
            </Link>
            <p className="mt-10 text-5xl italic text-white/90" style={{ fontFamily: "var(--font-playfair)" }}>
              Gala
            </p>
          </div>
        </div>
      </section>

      {more.length > 0 ? (
        <section className="bg-white px-4 py-10 md:px-8 md:py-14" aria-labelledby="mas">
          <h2 id="mas" className="sr-only">
            Más piezas
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {more.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : null}

      {featured.length > 0 ? (
        <section className="bg-white px-4 pb-16 md:px-8" aria-labelledby="vault">
          <div className="overflow-hidden bg-ink">
            <ArrivalMarquee label="VAULT" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">
            {site.location} · Pedidos por WhatsApp
          </p>
        </section>
      ) : null}
    </div>
  );
}
