import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProduct, products, relatedProducts } from "@data/products";
import { ProductCard } from "@/components/product-card";
import { ProductView } from "@/components/product-view";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Producto" };
  return {
    title: `${product.brand} ${product.name}`,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  };
}

async function ProductContent({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = relatedProducts(product, 4);

  return (
    <div className="px-4 pb-16 pt-10 md:px-8">
      <ProductView product={product} />
      {related.length > 0 ? (
        <section className="mt-16" aria-labelledby="relacionados">
          <h2 id="relacionados" className="type-display">
            Completa el look
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default function ProductPage(props: Props) {
  return (
    <Suspense fallback={<div className="px-4 py-24 text-muted">Cargando pieza…</div>}>
      <ProductContent {...props} />
    </Suspense>
  );
}
