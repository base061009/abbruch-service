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
    "Wiener Entkernung | Abbruch, Entkernung & Entrümpelung in Wien",
  tagline: "Sauber. Sicher. Termingerecht.",
  description:
    "Professioneller Abbruch, Entkernung und Entrümpelung in Wien und Österreich – von der Planung bis zur Entsorgung.",
  shareText:
    "Abbruch · Entkernung · Entrümpelung in Wien. Sauber. Sicher. Termingerecht. – Wiener Entkernung.",
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
    description:
      "Vor Ort in Wien klären wir Umfang, Zugang und Besonderheiten Ihres Objekts und stimmen den Zeitplan für Entkernung oder Entrümpelung ab.",
  },
  {
    title: "Angebot",
    description:
      "Sie erhalten ein klares, unverbindliches Angebot für Abbruch, Entkernung oder Entrümpelung – ohne versteckte Positionen.",
  },
  {
    title: "Ausführung",
    description:
      "Fachgerechter Rückbau und Entsorgung, termingerecht und mit Rücksicht auf Nachbarschaft und Gebäudesubstanz.",
  },
  {
    title: "Übergabe",
    description:
      "Saubere Übergabe der Fläche in Wien – bereit für Sanierung, Umbau oder Weiterverkauf.",
  },
] as const;

export const faqs = [
  {
    question: "In welchen Gebieten führen Sie Entkernung und Abbruch durch?",
    answer:
      "Schwerpunkt ist Wien und Umgebung. Projekte in ganz Österreich sind nach Absprache möglich.",
  },
  {
    question: "Wie läuft eine Anfrage ab?",
    answer:
      "Kurz Ihr Vorhaben schildern – telefonisch oder per E-Mail. Danach folgt die Besichtigung und ein unverbindliches Angebot.",
  },
  {
    question: "Übernehmen Sie auch die Entsorgung?",
    answer:
      "Ja. Demontage, Abtransport und fachgerechte Entsorgung gehören zum Leistungsumfang.",
  },
  {
    question: "Wie schnell können Sie starten?",
    answer:
      "Je nach Auftragslage oft kurzfristig. Den genauen Termin stimmen wir nach der Besichtigung verbindlich ab.",
  },
] as const;

export const services = [
  {
    slug: "komplettentkernung",
    title: "Komplettentkernung",
    shortTitle: "Komplettentkernung Wien",
    description:
      "Vollständige Entkernung von Wohnungen und Gebäuden – Innenausbau, Installationen und nicht tragende Bauteile fachgerecht entfernt.",
    longDescription:
      "Bei der Komplettentkernung in Wien bereiten wir Wohnungen, Häuser und Gewerbeobjekte systematisch auf Umbau oder Sanierung vor. Wir entfernen Innenausbau, Bodenbeläge, nicht tragende Wände sowie Installationen und entsorgen das Material fachgerecht – damit die Fläche sauber und planbar weiterverwendet werden kann.",
    body: [
      "Eine Komplettentkernung in Wien ist sinnvoll, wenn Sie eine Wohnung, ein Haus oder eine Gewerbefläche grundlegend sanieren oder neu gestalten möchten. Wiener Entkernung übernimmt den strukturierten Rückbau: von Böden und Türen über nicht tragende Trennwände bis zu ausgewählten Installationen – abgestimmt auf Statik und Folgearbeitsgänge.",
      "Wir arbeiten termingerecht und mit klarer Kommunikation gegenüber Auftraggeber, Hausverwaltung und Nachbarn. Abtransport und Entsorgung sind Teil des Auftrags, damit nach der Entkernung Wien kein Material liegen bleibt und Folgegewerke direkt starten können.",
      "Ob Altbau oder Neubau: Vor dem Start klären wir Umfang, Zugang und Zeitfenster. So bleibt Ihre Komplettentkernung planbar – von der ersten Besichtigung bis zur besenreinen Übergabe.",
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
      "Sanitäranlagen, Fliesen und Installationen im Bad entfernen – sauber, staubarm und bereit für die Neuausstattung.",
    longDescription:
      "Die Badentkernung in Wien ist der saubere Start für Ihre Badsanierung. Wir demontieren Sanitärobjekte, Fliesen, Estrichbereiche und Leitungen so, dass Folgegewerke zügig und ohne Altlasten weiterarbeiten können.",
    body: [
      "Bei einer Badentkernung in Wien entfernen wir Wanne, Dusche, WC, Waschtische sowie Fliesen und zugehörige Untergründe. Ziel ist eine klare, trockene und zugängliche Fläche für Sanitär, Fliesenleger und Installateure.",
      "Wir achten auf staubarme Arbeitsweise und Schutz angrenzender Räume – besonders wichtig in bewohnten Wohnungen. Entsorgungswege und Zwischenlagerung stimmen wir vorab ab, damit die Badentkernung zügig und ohne unnötige Belastung für Haus und Nachbarn läuft.",
      "Ob Teilsanierung oder Komplettumbau: Nach der Demontage übergeben wir das Bad so, dass Folgegewerke ohne Zeitverlust starten können. Fragen Sie unverbindlich nach einem Termin für Ihre Badentkernung in Wien.",
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
      "Küchenzeilen, Geräte und Leitungen demontieren und entsorgen – präzise und termingerecht vor Ihrem Umbau.",
    longDescription:
      "Vor dem Küchenumbau entfernen wir Zeilen, Geräte, Arbeitsplatten und zugehörige Anschlüsse. Die Küchenentkernung in Wien erfolgt präzise, damit Elektro, Sanitär und Möbelbauer direkt anschließen können.",
    body: [
      "Die Küchenentkernung in Wien schafft Platz für Ihre neue Küche: Wir demontieren Zeilen, Einbaugeräte, Arbeitsplatten und Verkleidungen und kümmern uns um den Abtransport. Anschlüsse und Leitungsrückbau erfolgen so, dass Folgegewerke klar und sicher weiterarbeiten können.",
      "Gerade in Mehrparteienhäusern zählt eine kurze, gut abgestimmte Ausführung. Wiener Entkernung plant Zugänge, Entsorgungswege und Zeitfenster mit Ihnen – damit die Küchenentkernung den Hausalltag möglichst wenig stört.",
      "Ob Mietwohnung, Eigentum oder Gewerbeküche: Nach der Entrümpelung und Demontage übergeben wir die Fläche besenrein. Fordern Sie ein Angebot für Ihre Küchenentkernung in Wien an.",
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
      "Komplette Freiräumung und Rückbau einer Balkonterrassenfläche inkl. Entsorgung.",
    longDescription:
      "Für dieses Projekt in Wien haben wir eine stark belegte Balkonterrassenfläche freigeräumt und zurückgebaut. Inventar, Beläge und Rückstände wurden abtransportiert und entsorgt, sodass die Terrasse wieder nutzbar und bereit für die weitere Gestaltung war.",
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
      "Komplettentkernung eines Wohnraums – Bodenbeläge und Innenausbau fachgerecht entfernt.",
    longDescription:
      "Bei dieser Wohnungsentkernung in Wien entfernten wir Bodenbeläge und Innenausbau fachgerecht, um die Fläche für die Sanierung freizumachen. Der Fokus lag auf einer sauberen Übergabe und der Entsorgung aller ausgebauten Materialien.",
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
      "Entkernung einer Altbauwohnung – Böden, Installationen und nicht tragende Bauteile entfernt.",
    longDescription:
      "Die Altbau-Entkernung in Wien umfasste Böden, Installationen und nicht tragende Bauteile. Wir arbeiteten mit Rücksicht auf die Gebäudesubstanz und übergaben die Wohnung bereit für die weitere Sanierung.",
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
      "Entrümpelung einer abgebrannten Wohnung – Brandreste und beschädigtes Inventar vollständig entfernt und entsorgt.",
    longDescription:
      "Nach einem Brandschaden in Wien entrümpelten wir die Wohnung vollständig: Brandreste und beschädigtes Inventar wurden entfernt und fachgerecht entsorgt. Ziel war eine sichere, geräumte Fläche für die weitere Sanierung.",
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
