# Gala Designer

Catálogo premium de ropa, calzado y accesorios de diseñador en Santo Domingo. Pedidos por WhatsApp (sin pasarela por ahora).

## Arranque

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Qué editar

| Qué | Dónde |
| --- | --- |
| Productos, precios, tallas, fotos | `data/products.ts` |
| WhatsApp, Instagram, horario, FAQ | `config/site.ts` |
| Fotos de ambiente / IG | `data/lookbook.ts` y `public/images/ig/` |
| Número directo de WhatsApp | `phoneE164` en `config/site.ts` (si está vacío, usa `wa.link`) |

Los precios del catálogo son **ejemplos** en RD$. Sustitúyelos antes de publicar.

## Deploy (Vercel o Netlify)

1. Sube el repo a GitHub.
2. Conecta el proyecto en Vercel o Netlify.
3. Build: `next build`. Publish (Netlify): `.next`.
4. Variable opcional: `NEXT_PUBLIC_SITE_URL=https://tu-dominio.com`

## Notas

- El carrito se guarda en `localStorage` (`gala-designer-cart`).
- La estructura del carrito y del catálogo está lista para conectar Shopify o Stripe más adelante.
- No subas ZIPs grandes al repositorio; las fotos ya están en `public/images/ig/`.
