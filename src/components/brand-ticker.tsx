import { site } from "@config/site";
import { BrandLogo } from "@/components/brand-marks";

export function BrandTicker() {
  const loop = [...site.houses, ...site.houses];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-white" aria-hidden>
      <div className="ticker items-center py-6">
        {loop.map((house, index) => (
          <span key={`${house}-${index}`} className="flex items-center gap-10 px-8 text-ink">
            <BrandLogo name={house} className="h-10 w-auto max-w-[160px] md:h-12" />
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
