import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig, routes } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns – Wiener Entkernung in Wien",
  description:
    "Wiener Entkernung: Ihr Partner für Abbruch, Entkernung und Entrümpelung in Wien. Zuverlässig, termingerecht und mit klarer Kommunikation.",
  alternates: { canonical: routes.about },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.about,
    siteName: siteConfig.shortName,
    title: "Über uns – Wiener Entkernung in Wien",
    description:
      "Wiener Entkernung: Ihr Partner für Abbruch, Entkernung und Entrümpelung in Wien. Zuverlässig, termingerecht und mit klarer Kommunikation.",
  },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.81.11v-3.55a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.16 15.7a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.18 8.18 0 0 0 4.76 1.52V6.91a4.84 4.84 0 0 1-1.01-.22z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <header>
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Über uns
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {siteConfig.name} – Abbruch &amp; Entkernung in Wien
        </h1>
        <p className="mt-3 text-base text-white/60 sm:text-lg">
          Abbruch, Entkernung und Entrümpelung mit klarer Haltung: sauber,
          zuverlässig, termingerecht.
        </p>
      </header>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-white/75">
        <p>
          {siteConfig.name} steht für professionellen Rückbau in Wien.
          Wir entkernen Wohnungen und Gewerbeflächen, übernehmen Bad- und
          Küchenrückbau und unterstützen bei Entrümpelung – inklusive
          Abtransport und Entsorgung. Unser Anspruch: jedes Objekt so zu
          übergeben, dass Sanierung oder Umbau ohne Verzögerung starten können.
        </p>
        <p>
          Als lokaler Partner für Entkernung Wien und Abbruch Wien legen wir
          Wert auf transparente Angebote, verlässliche Termine und respektvollen
          Umgang mit Haus, Nachbarschaft und Gebäudesubstanz. Ob Altbau,
          Terrasse oder Brandschaden: Wir planen den Ablauf mit Ihnen und halten
          Sie über den Fortschritt auf dem Laufenden.
        </p>
        <h2 className="pt-2 text-xl font-bold text-white">
          Wie wir arbeiten
        </h2>
        <p>
          Jeder Auftrag beginnt mit einer Besichtigung und einer ehrlichen
          Einschätzung des Umfangs. Danach erhalten Sie ein klares Angebot.
          Bei der Ausführung achten wir auf Schutz angrenzender Bereiche,
          sichere Entsorgungswege und eine besenreine Übergabe. So bleibt Ihr
          Projekt planbar – von der ersten Anfrage bis zum Abschluss.
        </p>
        <p>
          Sie möchten mehr über konkrete Aufträge erfahren? Sehen Sie sich
          unsere{" "}
          <Link
            href={routes.projects}
            className="font-semibold text-[#f2aa4c] hover:underline"
          >
            Entkernungsprojekte in Wien
          </Link>{" "}
          an oder fragen Sie direkt ein{" "}
          <Link
            href={routes.contact}
            className="font-semibold text-[#f2aa4c] hover:underline"
          >
            Angebot für Entkernung in Wien
          </Link>{" "}
          an.
        </p>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Lernen Sie unsere Leistungen kennen
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Komplett-, Bad- und Küchenentkernung – übersichtlich erklärt.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
          <Link href={routes.services}>
            Leistungen: Entkernung Wien ansehen
          </Link>
        </Button>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
          Folgen Sie uns
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f2aa4c]/40 hover:text-[#f2aa4c]"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f2aa4c]/40 hover:text-[#f2aa4c]"
          >
            <TikTokIcon className="size-4" />
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
