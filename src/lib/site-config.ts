/**
 * Zentrale Marken- & Site-Konfiguration.
 * Name, Kontaktdaten, Social Links und Navigation hier anpassen.
 */
const PRODUCTION_URL = "https://wiener-entkernung.at";

/** Prefer env URL, but never use a Vercel preview/deployment host for SEO. */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!fromEnv) return PRODUCTION_URL;
  try {
    const { hostname } = new URL(fromEnv);
    if (/vercel\.app$/i.test(hostname)) return PRODUCTION_URL;
    return fromEnv;
  } catch {
    return PRODUCTION_URL;
  }
}

export const siteConfig = {
  name: "Wiener Entkernung",
  shortName: "Wiener Entkernung",
  title:
    "Wiener Entkernung | Abbruch, Entkernung & Entrümpelung in Wien",
  tagline: "Sauber. Sicher. Termingerecht.",
  description:
    "Professioneller Abbruch, Entkernung und Entrümpelung in Österreich – von der Planung bis zur Entsorgung.",
  shareText:
    "Abbruch · Entkernung · Entrümpelung in Österreich. Sauber. Sicher. Termingerecht. – Wiener Entkernung.",
  ogImage: "/preview.jpg",
  ogImageSquare: "/preview-square.jpg",
  url: resolveSiteUrl(),
  locale: "de_AT",
  phone: "0677 629 359 03",
  phoneE164: "+4367762935903",
  phoneHref: "tel:+4367762935903",
  email: "office@wiener-entkernung.at",
  address: {
    street: "Mitterhofergasse 15/5",
    zip: "1210",
    city: "Wien",
    country: "Österreich",
  },
  social: {
    instagram: "https://www.instagram.com/dasabbruchservice",
    tiktok: "https://www.tiktok.com/@dasabbruchservice",
  },
  legal: {
    companyName: "Wiener Entkernung",
    owner: "Minel Alić",
    gisaNumber: "38012426",
    supervisoryAuthority: "Magistrat der Stadt Wien",
    chamber: "Wirtschaftskammer Wien",
    tradeDescription:
      "Entrümpler (Räumung durch Entfernung wertlosen Gutes)",
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
  {
    id: "4",
    title: "Brandschaden-Entrümpelung",
    location: "Wien",
    year: "2025",
    description:
      "Entrümpelung einer abgebrannten Wohnung – Brandreste und beschädigtes Inventar vollständig entfernt und entsorgt.",
    before: "/pics/vorher-4.jpeg",
    after: "/pics/nachher-4.jpeg",
  },
] as const;

export type SiteConfig = typeof siteConfig;
