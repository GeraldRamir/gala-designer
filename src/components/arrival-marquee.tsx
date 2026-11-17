import { IconGlobe } from "@/components/icons";

export function ArrivalMarquee({ label = "NUEVOS INGRESOS" }: { label?: string }) {
  const items = Array.from({ length: 12 }, () => label);
  return (
    <div className="overflow-hidden bg-ink text-white" aria-hidden>
      <div className="ticker items-center py-3">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-5 px-5 font-trap text-2xl tracking-[0.12em] md:text-4xl">
            {item}
            <IconGlobe className="h-7 w-7 md:h-9 md:w-9" />
          </span>
        ))}
      </div>
    </div>
  );
}
