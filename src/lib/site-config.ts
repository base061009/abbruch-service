/**
 * Zentrale Marken- & Site-Konfiguration.
 * Name, Kontaktdaten, Social Links und Navigation hier anpassen.
 *
 * SEO-URLs laufen ausschließlich über `url` / `absoluteUrl()`.
 * Niemals VERCEL_URL / VERCEL_BRANCH_URL / VERCEL_PROJECT_PRODUCTION_URL –
 * Next.js würde die sonst intern für relative og:image-URLs nutzen.
 */
export const PRODUCTION_SITE_URL = "https://wiener-entkernung.at";

/**
 * Canonical production host only.
 * Uses NEXT_PUBLIC_SITE_URL when set to a non-Vercel host; otherwise
 * PRODUCTION_SITE_URL. Never falls back to VERCEL_* env vars.
 */
function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!fromEnv) return PRODUCTION_SITE_URL;

  try {
    const { hostname, protocol } = new URL(fromEnv);
    if (protocol !== "http:" && protocol !== "https:") {
      return PRODUCTION_SITE_URL;
    }
    // Reject Vercel deployment hosts so SEO never points at *.vercel.app
    if (hostname === "vercel.app" || hostname.endsWith(".vercel.app")) {
      return PRODUCTION_SITE_URL;
    }
    return fromEnv;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

const siteUrl = resolveSiteUrl();

/** Build an absolute URL on the production site (path must start with `/` or be empty). */
export function absoluteUrl(path: string = "/"): string {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const routes = {
  home: "/",
  services: "/dienstleistungen",
  projects: "/projekte",
  about: "/ueber-uns",
  contact: "/kontakt",
  imprint: "/impressum",
  privacy: "/datenschutz",
  service: (slug: string) => `/dienstleistungen/${slug}`,
  project: (slug: string) => `/projekte/${slug}`,
} as const;

export const siteConfig = {
  name: "Wiener Entkernung",
  shortName: "Wiener Entkernung",
  title:
    "Entkernung Wien | Wohnung & Gebäude entkernen – Wiener Entkernung",
  tagline: "Sauber. Sicher. Termingerecht.",
  description:
    "Entkernung Wien: Wohnung oder Gebäude professionell entkernen. Abbruch, Entrümpelung und Entsorgung – von der Besichtigung bis zur sauberen Übergabe.",
  shareText:
    "Entkernung Wien · Abbruch · Entrümpelung. Wohnung & Gebäude entkernen – Wiener Entkernung.",
  /** Relative path – prefer `ogImageAbsolute` for metadata to bypass Next VERCEL_URL fallback. */
  ogImage: "/preview.jpg",
  ogImageSquare: "/preview-square.jpg",
  ogImageAbsolute: absoluteUrl("/preview.jpg"),
  ogImageSquareAbsolute: absoluteUrl("/preview-square.jpg"),
  url: siteUrl,
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
  geo: {
    latitude: 48.2789,
    longitude: 16.4128,
  },
  priceRange: "$$",
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
  { href: routes.home, label: "Start" },
  { href: routes.services, label: "Dienstleistungen" },
  { href: routes.projects, label: "Projekte" },
  { href: routes.about, label: "Über uns" },
  { href: routes.contact, label: "Kontakt" },
] as const;

export const footerLinks = [
  { href: routes.imprint, label: "Impressum" },
  { href: routes.privacy, label: "Datenschutz" },
] as const;

export const processSteps = [
  {
    title: "Besichtigung",
    description: "Vor Ort in Wien klären wir Umfang, Zugang und Zeitplan.",
  },
  {
    title: "Angebot",
    description: "Klares, unverbindliches Angebot für Ihr Projekt in Wien.",
  },
  {
    title: "Ausführung",
    description: "Rückbau und Entsorgung – wir entkernen termingerecht und sauber.",
  },
  {
    title: "Übergabe",
    description: "Besenreine Fläche in Wien – bereit für Sanierung oder Umbau.",
  },
] as const;

export const faqs = [
  {
    question: "Was ist eine Entkernung?",
    answer:
      "Bei einer Entkernung wird der Innenausbau eines Gebäudes oder einer Wohnung entfernt – zum Beispiel Böden, nicht tragende Wände, Sanitär oder Küche. Tragende Konstruktion und Gebäudehülle bleiben erhalten. In Wien ist das typisch vor Sanierungen und Umbauten.",
  },
  {
    question: "Kann ich meine Wohnung in Wien entkernen lassen?",
    answer:
      "Ja. Wir entkernen Wohnungen und Gewerbeflächen in Wien – von der Teilentkernung (Bad, Küche) bis zur Komplettentkernung. Nach der Besichtigung erhalten Sie ein unverbindliches Angebot.",
  },
  {
    question: "Was ist der Unterschied zwischen Entkernung, Abbruch und Entrümpelung?",
    answer:
      "Entkernung betrifft den Innenausbau. Abbruch meint den Rückbau größerer Bauteile. Entrümpelung ist das Ausräumen von Inventar und Sperrmüll. Für Objekte in Wien beraten wir, welche Kombination sinnvoll ist.",
  },
  {
    question: "Wann brauche ich eine Entkernung?",
    answer:
      "Typisch vor einer kompletten Sanierung in Wien, einem Umbau, nach Brand- oder Wasserschäden oder wenn Bad und Küche neu gemacht werden. Auch vor dem Verkauf kann ein klarer Rohbauzustand helfen.",
  },
  {
    question: "In welchen Gebieten sind Sie tätig?",
    answer:
      "Schwerpunkt ist Wien und Umgebung. Projekte in ganz Österreich sind nach Absprache möglich.",
  },
  {
    question: "Übernehmen Sie auch die Entsorgung?",
    answer:
      "Ja. Demontage, Abtransport und fachgerechte Entsorgung in Wien gehören zum Leistungsumfang.",
  },
  {
    question: "Wie läuft eine Anfrage ab?",
    answer:
      "Kurz Ihr Vorhaben in Wien schildern – telefonisch oder per E-Mail. Danach Besichtigung und unverbindliches Angebot.",
  },
] as const;

export const services = [
  {
    slug: "komplettentkernung",
    title: "Komplettentkernung",
    shortTitle: "Komplettentkernung Wien",
    description:
      "Vollständige Entkernung von Wohnungen und Gebäuden in Wien – Innenausbau, Installationen und nicht tragende Bauteile fachgerecht entfernt.",
    longDescription:
      "Bei der Komplettentkernung in Wien bereiten wir Wohnungen, Häuser und Gewerbeobjekte auf Umbau oder Sanierung vor: Innenausbau, Böden, nicht tragende Wände und Installationen werden entfernt und fachgerecht entsorgt.",
    body: [
      "Sinnvoll vor einer Grundsanierung in Wien. Umfang und Zeitfenster klären wir vorab – inklusive Abtransport.",
    ],
    highlights: [
      "Wohnungen, Häuser und Gewerbeflächen",
      "Innenausbau und Installationen",
      "Fachgerechte Entsorgung inklusive",
      "Abstimmung auf Ihren Bauzeitplan",
    ],
    icon: "Building2",
  },
  {
    slug: "badentkernung",
    title: "Badentkernung",
    shortTitle: "Badentkernung Wien",
    description:
      "Sanitäranlagen, Fliesen und Installationen im Bad in Wien entfernen – sauber, staubarm und bereit für die Neuausstattung.",
    longDescription:
      "Die Badentkernung in Wien ist der Start für Ihre Badsanierung: Sanitärobjekte, Fliesen und Leitungen werden entfernt, damit Folgegewerke ohne Altlasten weiterarbeiten können.",
    body: [
      "Staubarm und mit Schutz angrenzender Räume – ideal für bewohnte Wohnungen in Wien.",
    ],
    highlights: [
      "Wanne, Dusche, WC und Waschtische",
      "Fliesen und Untergründe",
      "Sanitär- und Installationsrückbau",
      "Staubarme, termingerechte Ausführung",
    ],
    icon: "Bath",
  },
  {
    slug: "kuechenentkernung",
    title: "Küchenentkernung",
    shortTitle: "Küchenentkernung Wien",
    description:
      "Küchenzeilen, Geräte und Leitungen in Wien demontieren und entsorgen – präzise und termingerecht vor Ihrem Umbau.",
    longDescription:
      "Vor dem Küchenumbau in Wien demontieren wir Zeilen, Geräte und Anschlüsse und entsorgen alles fachgerecht – präzise, damit Elektro und Möbelbauer direkt anschließen können.",
    body: [
      "Zugänge und Entsorgungswege stimmen wir vorab ab – damit die Küchenentkernung in Wien den Alltag wenig stört.",
    ],
    highlights: [
      "Küchenzeilen und Einbaugeräte",
      "Arbeitsplatten und Verkleidungen",
      "Anschlüsse und Leitungsrückbau",
      "Entsorgung und besenreine Übergabe",
    ],
    icon: "CookingPot",
  },
] as const;

export const projects = [
  {
    id: "1",
    slug: "terrasse-wien",
    title: "Terrasse Wien",
    location: "Wien",
    year: "2025",
    description:
      "Komplette Freiräumung und Rückbau einer Balkonterrassenfläche in Wien inkl. Entsorgung.",
    longDescription:
      "Balkonterrassenfläche in Wien freigeräumt und zurückgebaut – inkl. Abtransport und Entsorgung.",
    before: "/pics/vorher-1.jpeg",
    after: "/pics/nachher-1.jpeg",
    beforeAlt:
      "Terrassenrückbau Wien – Zustand vorher mit beladener Balkonfläche",
    afterAlt:
      "Terrassenrückbau Wien – Zustand nachher nach Freiräumung und Entsorgung",
  },
  {
    id: "2",
    slug: "wohnungsentkernung-wien",
    title: "Wohnungsentkernung",
    location: "Wien",
    year: "2025",
    description:
      "Komplettentkernung eines Wohnraums in Wien – Bodenbeläge und Innenausbau fachgerecht entfernt.",
    longDescription:
      "Komplettentkernung in Wien: Bodenbeläge und Innenausbau entfernt, Fläche für die Sanierung freigemacht.",
    before: "/pics/vorher-2.jpeg",
    after: "/pics/nachher-2.jpeg",
    beforeAlt:
      "Wohnungsentkernung Wien – Zustand vorher mit Innenausbau und Bodenbelägen",
    afterAlt:
      "Wohnungsentkernung Wien – Zustand nachher nach Komplettentkernung",
  },
  {
    id: "3",
    slug: "altbau-entkernung-wien",
    title: "Altbau-Entkernung",
    location: "Wien",
    year: "2024",
    description:
      "Entkernung einer Altbauwohnung in Wien – Böden, Installationen und nicht tragende Bauteile entfernt.",
    longDescription:
      "Altbauwohnung in Wien entkernt – Böden, Installationen und nicht tragende Bauteile, mit Rücksicht auf die Substanz.",
    before: "/pics/vorher-3.jpeg",
    after: "/pics/nachher-3.jpeg",
    beforeAlt: "Entkernung Altbauwohnung Wien – Zustand vorher",
    afterAlt:
      "Entkernung Altbauwohnung Wien – Zustand nachher ohne Böden und Innenausbau",
  },
  {
    id: "4",
    slug: "brandschaden-entruempelung-wien",
    title: "Brandschaden-Entrümpelung",
    location: "Wien",
    year: "2025",
    description:
      "Entrümpelung einer abgebrannten Wohnung in Wien – Brandreste und Inventar vollständig entfernt und entsorgt.",
    longDescription:
      "Nach Brandschaden in Wien: Brandreste und Inventar vollständig entrümpelt und entsorgt.",
    before: "/pics/vorher-4.jpeg",
    after: "/pics/nachher-4.jpeg",
    beforeAlt:
      "Brandschaden-Entrümpelung Wien – Zustand vorher mit Brandresten",
    afterAlt:
      "Brandschaden-Entrümpelung Wien – Zustand nachher nach vollständiger Räumung",
  },
] as const;

export type SiteConfig = typeof siteConfig;
export type Service = (typeof services)[number];
export type Project = (typeof projects)[number];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
