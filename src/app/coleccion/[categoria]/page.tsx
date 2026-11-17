import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { categories, getCategory, isCategory } from "@data/products";
import { ShopBrowser } from "@/components/shop-browser";

type Props = { params: Promise<{ categoria: string }> };

export function generateStaticParams() {
  return [...categories.map((item) => ({ categoria: item.slug })), { categoria: "calzado" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  if (categoria === "calzado") {
    return { title: "Calzado", description: "Slides y calzado de diseñador en Gala Designer." };
  }
  const category = getCategory(categoria);
  if (!category) return { title: "Colección" };
  return {
    title: category.name,
    description: category.blurb,
  };
}

async function CategoryContent({ params }: Props) {
  const { categoria } = await params;
  if (categoria === "calzado") {
    return (
      <div className="pt-8">
        <div className="px-4 md:px-8">
          <p className="font-trap text-[11px] uppercase tracking-[0.4em] text-gold">Colección</p>
          <h1 className="type-display mt-2">Calzado</h1>
        </div>
        <ShopBrowser category="calzado" />
      </div>
    );
  }
  if (!isCategory(categoria)) notFound();
  const category = getCategory(categoria);
  if (!category) notFound();
  return (
    <div className="pt-8">
      <div className="px-4 md:px-8">
        <p className="font-trap text-[11px] uppercase tracking-[0.4em] text-gold">Colección</p>
        <h1 className="type-display mt-2">{category.name}</h1>
        <p className="mt-3 max-w-xl text-sm text-muted">{category.blurb}</p>
      </div>
      <ShopBrowser category={categoria} />
    </div>
  );
}

export default function CategoryPage(props: Props) {
  return (
    <Suspense fallback={<div className="px-4 py-24 text-muted">Cargando colección…</div>}>
      <CategoryContent {...props} />
    </Suspense>
  );
}
