"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { categories, products, type CategorySlug } from "@data/products";
import { ProductCard } from "@/components/product-card";

type SortKey = "new" | "asc" | "desc";

const priceBands = [
  { id: "all", label: "Todo precio", min: 0, max: 999999 },
  { id: "mid", label: "Hasta RD$20,000", min: 0, max: 20000 },
  { id: "high", label: "RD$20,000–40,000", min: 20000, max: 40000 },
  { id: "top", label: "RD$40,000+", min: 40000, max: 999999 },
];

export function ShopBrowser({ category }: { category: CategorySlug | "all" }) {
  const [size, setSize] = useState("all");
  const [brand, setBrand] = useState("all");
  const [band, setBand] = useState("all");
  const [sort, setSort] = useState<SortKey>("new");
  const [query, setQuery] = useState("");

  const pool = useMemo(
    () => (category === "all" ? products : products.filter((item) => item.category === category)),
    [category],
  );

  const sizes = useMemo(() => Array.from(new Set(pool.flatMap((item) => item.sizes))), [pool]);
  const brands = useMemo(() => Array.from(new Set(pool.map((item) => item.brand))).sort(), [pool]);

  const visible = useMemo(() => {
    const selectedBand = priceBands.find((item) => item.id === band) ?? priceBands[0];
    const q = query.trim().toLowerCase();
    const filtered = pool.filter((product) => {
      if (size !== "all" && !product.sizes.includes(size)) return false;
      if (brand !== "all" && product.brand !== brand) return false;
      if (product.price < selectedBand.min || product.price > selectedBand.max) return false;
      if (q && !`${product.name} ${product.brand}`.toLowerCase().includes(q)) return false;
      return true;
    });
    return filtered.sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
      return a.id.localeCompare(b.id);
    });
  }, [pool, size, brand, band, sort, query]);

  return (
    <div className="px-4 py-8 md:px-8">
      <div className="mb-4">
        <label className="block text-xs uppercase tracking-[0.18em] text-muted">
          Buscar
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre o marca"
            className="mt-2 w-full border border-ink/15 bg-white px-3 py-3 text-base normal-case tracking-normal text-ink md:max-w-md"
          />
        </label>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4">
        <Chip href="/coleccion" active={category === "all"}>
          Todo
        </Chip>
        {categories.map((item) => (
          <Chip key={item.slug} href={`/coleccion/${item.slug}`} active={category === item.slug}>
            {item.name}
          </Chip>
        ))}
        <Chip href="/coleccion/calzado" active={category === "calzado"}>
          Calzado
        </Chip>
      </div>

      <div className="flex flex-col gap-3 border-y border-ink/10 py-4">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <FilterButton active={brand === "all"} onClick={() => setBrand("all")}>
            Marcas
          </FilterButton>
          {brands.map((item) => (
            <FilterButton key={item} active={brand === item} onClick={() => setBrand(item)}>
              {item}
            </FilterButton>
          ))}
        </div>
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
          <FilterButton active={size === "all"} onClick={() => setSize("all")}>
            Tallas
          </FilterButton>
          {sizes.map((item) => (
            <FilterButton key={item} active={size === item} onClick={() => setSize(item)}>
              {item}
            </FilterButton>
          ))}
        </div>
        <div className="-mx-4 flex flex-wrap items-center gap-2 px-4">
          {priceBands.map((item) => (
            <FilterButton key={item.id} active={band === item.id} onClick={() => setBand(item.id)}>
              {item.label}
            </FilterButton>
          ))}
          <label className="ml-auto text-xs uppercase tracking-[0.16em] text-muted">
            <span className="sr-only">Ordenar</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="border border-ink/15 bg-ivory px-3 py-2 text-xs uppercase tracking-[0.14em] text-ink"
            >
              <option value="new">Nuevos</option>
              <option value="asc">Precio ↑</option>
              <option value="desc">Precio ↓</option>
            </select>
          </label>
        </div>
      </div>

      <p className="py-4 text-xs uppercase tracking-[0.18em] text-muted">
        {visible.length} {visible.length === 1 ? "pieza" : "piezas"}
      </p>

      {visible.length === 0 ? (
        <p className="py-16 text-muted">No hay piezas con esos filtros. Prueba otra marca o talla.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 xl:grid-cols-4">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`shrink-0 px-4 py-2 font-trap text-xl tracking-[0.14em] ${
        active ? "bg-ink text-ivory" : "border border-ink/15 text-ink hover:border-gold"
      }`}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap px-3 py-2 font-trap text-xs uppercase tracking-[0.18em] ${
        active ? "bg-ink text-ivory" : "border border-ink/10 text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}
