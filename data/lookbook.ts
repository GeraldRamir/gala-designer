export type LookPhoto = {
  src: string;
  alt: string;
};

export const lookbook: LookPhoto[] = [
  {
    src: "/images/ig/gala-043.jpg",
    alt: "Interior de Gala Designer con logo dorado y denim en el mostrador",
  },
  {
    src: "/images/ig/gala-003.jpg",
    alt: "Bolsas Louis Vuitton y Gala Designer con sneakers Prada",
  },
  {
    src: "/images/ig/gala-002.jpg",
    alt: "Haul de bolsas Louis Vuitton y Jordan 4 sobre sofá verde",
  },
  {
    src: "/images/ig/gala-018.jpg",
    alt: "Sneakers Louis Vuitton negras con fragancias y bolsas naranjas",
  },
  {
    src: "/images/ig/gala-001.jpg",
    alt: "Selección de Prada America's Cup sobre mármol",
  },
  {
    src: "/images/ig/gala-004.jpg",
    alt: "Flat lay con Prada bronce, Burberry y bolsas Gala Designer",
  },
  {
    src: "/images/ig/gala-014.jpg",
    alt: "Outfit Casablanca Tennis Club con jeans Amiri",
  },
  {
    src: "/images/ig/gala-047.jpg",
    alt: "Jeans distressed sobre mostrador con luz cálida de la tienda",
  },
];

export const instagramThumbs = lookbook.slice(0, 8);
