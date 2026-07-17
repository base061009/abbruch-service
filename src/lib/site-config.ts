/**
 * Zentrale Marken- & Site-Konfiguration.
 * Name, Kontaktdaten, Social Links und Navigation hier anpassen.
 */
export const siteConfig = {
  name: "Das Abbruchservice",
  shortName: "Abbruchservice",
  tagline: "Sauber. Sicher. Termingerecht.",
  description:
    "Professioneller Abbruch, Entkernung und Entrümpelung in Österreich – von der Planung bis zur Entsorgung.",
  shareText:
    "Abbruch · Entkernung · Entrümpelung in Österreich. Sauber. Sicher. Termingerecht. – Das Abbruchservice.",
  ogImage: "/preview.jpeg",
  url: "https://das-abbruchservice.at",
  locale: "de_AT",
  phone: "+43 1 234 56 78",
  phoneHref: "tel:+4312345678",
  email: "office@das-abbruchservice.at",
  address: {
    street: "Musterstraße 12",
    zip: "1010",
    city: "Wien",
    country: "Österreich",
  },
  social: {
    instagram: "https://www.instagram.com/dasabbruchservice",
    tiktok: "https://www.tiktok.com/@dasabbruchservice",
  },
  legal: {
    companyName: "Das Abbruchservice GmbH",
    legalForm: "Gesellschaft mit beschränkter Haftung",
    managingDirector: "Max Mustermann",
    uid: "ATU12345678",
    companyRegister: "FN 123456a",
    registerCourt: "Handelsgericht Wien",
    chamber: "Wirtschaftskammer Wien",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Start" },
  { href: "/services", label: "Dienstleistungen" },
  { href: "/projects", label: "Projekte" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
] as const;

export const footerLinks = [
  { href: "/imprint", label: "Impressum" },
  { href: "/privacy", label: "Datenschutz" },
] as const;

export const services = [
  {
    slug: "abbruch",
    title: "Abbruch & Rückbau",
    description:
      "Teil- und Totalabbruch von Gebäuden – geplant, genehmigt und fachgerecht ausgeführt.",
    icon: "Hammer",
  },
  {
    slug: "entkernung",
    title: "Entkernung",
    description:
      "Innenausbau entfernen, Tragwerk freilegen – ideal vor Sanierung oder Umbau.",
    icon: "Building2",
  },
  {
    slug: "entrumpelung",
    title: "Entrümpelung",
    description:
      "Wohnungen, Keller, Dachböden und Gewerbeobjekte – schnell und sorgfältig geräumt.",
    icon: "PackageOpen",
  },
  {
    slug: "schadstoff",
    title: "Schadstoffsanierung",
    description:
      "Asbest, PCB und andere Schadstoffe sicher erkennen, entfernen und entsorgen.",
    icon: "ShieldAlert",
  },
  {
    slug: "betonschneiden",
    title: "Betonschneiden & Kernbohrung",
    description:
      "Präzise Öffnungen und Schnitte in Beton – vibrationsarm und staubkontrolliert.",
    icon: "CircleDot",
  },
  {
    slug: "entsorgung",
    title: "Bauschutt & Entsorgung",
    description:
      "Sortierte Entsorgung und Recycling – gesetzeskonform und umweltbewusst.",
    icon: "Recycle",
  },
] as const;

export const projects = [
  {
    id: "1",
    title: "Wohnhaus Wien-Favoriten",
    location: "Wien",
    year: "2025",
    description: "Vollständiger Abbruch eines Mehrfamilienhauses inkl. Entsorgung.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
  },
  {
    id: "2",
    title: "Gewerbehalle Linz",
    location: "Linz",
    year: "2025",
    description: "Entkernung und Teilrückbau vor Umnutzung zur Logistikfläche.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
  },
  {
    id: "3",
    title: "Dachgeschoss Graz",
    location: "Graz",
    year: "2024",
    description: "Entrümpelung und Entkernung eines Dachgeschosses für Ausbau.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
  },
  {
    id: "4",
    title: "Industrieanlage St. Pölten",
    location: "St. Pölten",
    year: "2024",
    description: "Maschineller Abbruch mit Schadstoffsanierung und Recycling.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
  },
] as const;

export type SiteConfig = typeof siteConfig;
