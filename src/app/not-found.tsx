import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-trap text-7xl text-gold">404</p>
      <h1 className="type-display mt-2">Esa pieza no está</h1>
      <p className="mt-4 text-sm text-muted">Puede que se haya movido o ya no esté disponible.</p>
      <Link
        href="/coleccion"
        className="mt-8 bg-ink px-5 py-3 font-trap text-xl tracking-[0.18em] text-ivory"
      >
        Ver colección
      </Link>
    </div>
  );
}
