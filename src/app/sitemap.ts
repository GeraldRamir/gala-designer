import type { MetadataRoute } from "next";
import { site } from "@config/site";
import { categories, products } from "@data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticDate = new Date("2026-11-17");
  return [
    { url: base, lastModified: staticDate },
    { url: `${base}/coleccion`, lastModified: staticDate },
    { url: `${base}/tienda`, lastModified: staticDate },
    { url: `${base}/contacto`, lastModified: staticDate },
    { url: `${base}/carrito`, lastModified: staticDate },
    ...categories.map((item) => ({
      url: `${base}/coleccion/${item.slug}`,
      lastModified: staticDate,
    })),
    { url: `${base}/coleccion/calzado`, lastModified: staticDate },
    ...products.map((item) => ({
      url: `${base}/producto/${item.slug}`,
      lastModified: staticDate,
    })),
  ];
}
