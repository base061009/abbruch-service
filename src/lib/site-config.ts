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
  ogImage: "/preview.jpg",
  ogImageSquare: "/preview-square.jpg",
  url: "https://abbruch-service.vercel.app",
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
    slug: "komplettentkernung",
    title: "Komplettentkernung",
    description:
      "Vollständige Entkernung von Wohnungen und Gebäuden – Innenausbau, Installationen und nicht tragende Bauteile fachgerecht entfernt.",
    icon: "Building2",
  },
  {
    slug: "badentkernung",
    title: "Badentkernung",
    description:
      "Sanitäranlagen, Fliesen und Installationen im Bad entfernen – sauber, staubarm und bereit für die Neuausstattung.",
    icon: "Bath",
  },
  {
    slug: "kuechenentkernung",
    title: "Küchenentkernung",
    description:
      "Küchenzeilen, Geräte und Leitungen demontieren und entsorgen – präzise und termingerecht vor Ihrem Umbau.",
    icon: "CookingPot",
  },
  {
    slug: "abbruch",
    title: "Abbruch",
    description:
      "Teil- und Totalabbruch von Gebäuden – geplant, genehmigt und fachgerecht ausgeführt.",
    icon: "Hammer",
  },
] as const;

export const projects = [
  {
    id: "1",
    title: "Terrasse Wien",
    location: "Wien",
    year: "2025",
    description:
      "Komplette Freiräumung und Rückbau einer Balkonterrassenfläche inkl. Entsorgung.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
  },
  {
    id: "2",
    title: "Wohnungsentkernung",
    location: "Wien",
    year: "2025",
    description:
      "Komplettentkernung eines Wohnraums – Bodenbeläge und Innenausbau fachgerecht entfernt.",
    before: "/pics/vorher-2.jpeg",
    after: "/pics/nachher-2.jpeg",
  },
  {
    id: "3",
    title: "Altbau-Entkernung",
    location: "Wien",
    year: "2024",
    description:
      "Entkernung einer Altbauwohnung – Böden, Installationen und nicht tragende Bauteile entfernt.",
    before: "/pics/vorher-3.jpeg",
    after: "/pics/nachher-3.jpeg",
  },
] as const;

export type SiteConfig = typeof siteConfig;
