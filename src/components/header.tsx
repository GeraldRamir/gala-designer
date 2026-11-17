"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@config/site";
import { IconCart, IconClose, IconGlobe, IconMenu, IconSearch } from "@/components/icons";
import { useCart, useCartCount } from "@/store/cart";

export function Header() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const count = useCartCount();
  const openDrawer = useCart((state) => state.openDrawer);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  useEffect(() => {
    setMenu(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-white text-ink">
      <div className="grid h-[4.25rem] grid-cols-[1fr_auto_1fr] items-center gap-2 px-4 sm:px-8 lg:px-10">
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-ink/80 hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center"
            aria-expanded={menu}
            aria-controls="menu-movil"
            onClick={() => setMenu((value) => !value)}
          >
            <span className="sr-only">{menu ? "Cerrar menú" : "Abrir menú"}</span>
            {menu ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>

        <Link href="/" className="flex items-center justify-center gap-2" aria-label="Gala Designer, inicio">
          <IconGlobe className="h-8 w-8" />
          <span className="sr-only">Gala Designer</span>
        </Link>

        <div className="flex items-center justify-end gap-1 sm:gap-3">
          <Link href="/tienda" className="hidden text-sm text-ink/80 hover:text-ink lg:inline">
            Tienda
          </Link>
          <Link href="/contacto" className="hidden text-sm text-ink/80 hover:text-ink lg:inline">
            Contacto
          </Link>
          <Link
            href="/coleccion"
            className="grid h-11 w-11 place-items-center"
            aria-label="Buscar en la colección"
          >
            <IconSearch className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={openDrawer}
            className="relative grid h-11 w-11 place-items-center"
            aria-label={`Abrir carrito, ${count} ${count === 1 ? "pieza" : "piezas"}`}
          >
            <IconCart className="h-6 w-6" />
            <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-ink px-1 text-[10px] leading-none text-white">
              {count}
            </span>
          </button>
        </div>
      </div>

      {menu ? (
        <nav
          id="menu-movil"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white px-6 pb-10 pt-20 lg:hidden"
          aria-label="Móvil"
        >
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="border-b border-ink/10 py-4 text-3xl">
              {item.label}
            </Link>
          ))}
          <Link href="/tienda" className="border-b border-ink/10 py-4 text-3xl">
            Tienda
          </Link>
          <Link href="/contacto" className="border-b border-ink/10 py-4 text-3xl">
            Contacto
          </Link>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 bg-ink px-5 py-4 text-center text-xl text-white"
          >
            WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
