export const site = {
  name: "Gala Designer",
  tagline: "Se nota en el escenario",
  description:
    "Boutique de diseñador en Santo Domingo para artistas y gente que se ve. Prada, Amiri, Louis Vuitton, Casablanca. Pedidos por WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gala-designer.vercel.app",
  /** Completa el número E.164 cuando lo tengas. Mientras tanto usamos wa.link. */
  phoneDisplay: "" as string,
  phoneE164: "" as string,
  whatsappLink: "https://wa.link/c1eoe3",
  instagram: "https://www.instagram.com/gala_designerr/",
  instagramSecondary: "https://www.instagram.com/galadesigner_/",
  handle: "gala_designerr",
  handleSecondary: "galadesigner_",
  location: "Santo Domingo, RD",
  address: "Santo Domingo, República Dominicana",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santo+Domingo+Republica+Dominicana",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5!2d-69.9312!3d18.4861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI5JzEwLjAiTiA2OcKwNTUnNTIuMyJX!5e0!3m2!1ses!2sdo!4v1700000000000",
  hours: "Lun a sáb · 10:00 a.m. – 7:00 p.m.",
  hoursNote: "Horario de referencia. Confírmalo por WhatsApp antes de pasar.",
  shipping: "Envíos a todo el país",
  trustBar: [
    "Piezas seleccionadas",
    "Tienda física en Santo Domingo",
    "Envíos a todo el país",
    "Atención por WhatsApp",
  ],
  bannerNew: "HAGAN ALGO 🖤",
  houses: [
    "Prada",
    "Louis Vuitton",
    "Amiri",
    "Casablanca",
    "Burberry",
    "Rhude",
    "Valabasas",
  ],
  hero: {
    title: "LUJO QUE SE NOTA",
    kicker: "Boutique para artistas",
    subtitle: "Prada, Amiri, Louis Vuitton y Casablanca. El closet de quien llega y se nota. Santo Domingo.",
    image: "/images/ig/gala-043.jpg",
    imageAlt: "Interior de Gala Designer con logo dorado, denim y sneakers en Santo Domingo",
    sideImage: "/images/ig/gala-001.jpg",
    sideAlt: "Sneakers Prada America's Cup sobre mármol",
  },
  experienceImages: [
    {
      src: "/images/ig/gala-043.jpg",
      alt: "Tienda Gala Designer con logo dorado y estantes iluminados",
    },
    {
      src: "/images/ig/gala-003.jpg",
      alt: "Bolsas Louis Vuitton y sneakers Prada sobre mesa de piedra",
    },
    {
      src: "/images/ig/gala-002.jpg",
      alt: "Cliente con haul de bolsas Louis Vuitton y Jordan 4",
    },
    {
      src: "/images/ig/gala-018.jpg",
      alt: "Sneakers Louis Vuitton negras con perfumes y bolsas naranjas",
    },
  ],
  ogImage: "/images/ig/gala-043.jpg",
  deliveryOptions: [
    { id: "envio", label: "Envío a domicilio" },
    { id: "retiro", label: "Retiro en la tienda" },
  ],
  paymentNote:
    "Por ahora el pedido se cierra por WhatsApp. Puedes pagar por transferencia o en efectivo. Más adelante se puede conectar una pasarela.",
  authenticity:
    "Trabajamos piezas de diseñador seleccionadas. Si tienes duda con un modelo, escríbenos por WhatsApp y te confirmamos disponibilidad y autenticidad.",
  shippingDetail:
    "Puedes retirar en la tienda en Santo Domingo o pedirnos envío a tu sector o provincia. El costo y el tiempo te los confirmamos por WhatsApp.",
  sizeNote:
    "Calzado en tallas US. Ropa S–XXL. Accesorios y perfumes suelen ser talla única. Si estás entre dos tallas, escríbenos.",
  sizeGuide: {
    shoes: [
      { us: "7", eu: "40" },
      { us: "8", eu: "41" },
      { us: "9", eu: "42" },
      { us: "10", eu: "43" },
      { us: "11", eu: "44" },
      { us: "12", eu: "45" },
      { us: "13", eu: "46" },
    ],
    tops: [
      { size: "S", chest: "88–92 cm" },
      { size: "M", chest: "96–100 cm" },
      { size: "L", chest: "104–108 cm" },
      { size: "XL", chest: "112–116 cm" },
      { size: "XXL", chest: "120–124 cm" },
    ],
  },
  faq: [
    {
      q: "¿Cómo pago?",
      a: "Por ahora coordinamos por WhatsApp: transferencia o efectivo. Este flujo está listo para conectar Stripe o Shopify más adelante.",
    },
    {
      q: "¿Hacen envíos?",
      a: "Sí, a Santo Domingo y a todo el país. Te confirmamos el costo según tu sector o provincia.",
    },
    {
      q: "¿Puedo apartar una pieza?",
      a: "Sí. Escríbenos por WhatsApp, te confirmamos disponibilidad y te apartamos según la política del día. (Placeholder: ajústalo a tu regla real.)",
    },
    {
      q: "¿Puedo cambiar una pieza?",
      a: "Si está sin uso y con etiqueta, escríbenos dentro de los primeros días y coordinamos. (Placeholder: define tu ventana de cambios.)",
    },
    {
      q: "¿Cómo sé mi talla?",
      a: "En cada producto hay guía de referencia. Si dudas, mándanos tu talla de siempre y te orientamos.",
    },
  ],
  nav: [
    { href: "/coleccion?sort=new", label: "Nuevos" },
    { href: "/coleccion/sneakers", label: "Sneakers" },
    { href: "/coleccion/ropa", label: "Ropa" },
    { href: "/coleccion/accesorios", label: "Accesorios" },
    { href: "/coleccion/perfumes", label: "Perfumes" },
  ],
} as const;
