import Image from "next/image";

const files: Record<
  string,
  { src: string; width: number; height: number; dark?: boolean }
> = {
  Prada: { src: "/brands/prada.png", width: 220, height: 140 },
  Amiri: { src: "/brands/amiri.png", width: 140, height: 140 },
  Casablanca: { src: "/brands/casablanca.png", width: 260, height: 120 },
  Burberry: { src: "/brands/burberry.png", width: 240, height: 90 },
  Rhude: { src: "/brands/rhude.png", width: 220, height: 70 },
  Valabasas: { src: "/brands/valabasas.png", width: 200, height: 160, dark: true },
};

export function BrandLogo({
  name,
  className = "h-12 w-auto",
}: {
  name: string;
  className?: string;
}) {
  if (name === "Louis Vuitton") {
    return (
      <svg viewBox="0 0 280 36" className="h-7 w-auto md:h-8" role="img" aria-label="Louis Vuitton" fill="currentColor">
        <text
          x="140"
          y="26"
          textAnchor="middle"
          fontFamily="Times New Roman, Times, serif"
          fontSize="18"
          letterSpacing="4"
        >
          LOUIS VUITTON
        </text>
      </svg>
    );
  }

  const file = files[name];
  if (!file) {
    return <span className="font-trap text-sm tracking-[0.28em]">{name}</span>;
  }

  return (
    <span className={`inline-flex items-center ${file.dark ? "rounded-sm bg-ink px-3 py-2" : ""}`}>
      <Image
        src={file.src}
        alt={name}
        width={file.width}
        height={file.height}
        className={`${className} object-contain`}
      />
    </span>
  );
}
