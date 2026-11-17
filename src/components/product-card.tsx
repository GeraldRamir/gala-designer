import Link from "next/link";
import type { Product } from "@data/products";
import { IconHeart } from "@/components/icons";
import { Photo } from "@/components/photo";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: Product; featured?: boolean }) {
  return (
    <article>
      <Link href={`/producto/${product.slug}`} className="group block">
        <div className="relative aspect-square overflow-hidden bg-[#f4f4f4]">
          <Photo
            src={product.images[0]}
            alt={product.alt}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink">
            <IconHeart className="h-4 w-4" />
          </span>
        </div>
        <div className="px-1 pt-3">
          <h3 className="text-[11px] uppercase leading-snug tracking-[0.04em] text-ink">
            {product.brand} {product.name}
          </h3>
          <p className="mt-1 text-sm font-medium">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  );
}
