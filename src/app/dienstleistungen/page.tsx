import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { routes, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dienstleistungen: Entkernung, Bad & Küche in Wien",
  description:
    "Komplettentkernung, Badentkernung und Küchenentkernung in Wien – inklusive Entsorgung. Leistungen von Wiener Entkernung für Wohn- und Gewerbeobjekte.",
  alternates: { canonical: routes.services },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.services,
    siteName: siteConfig.shortName,
    title: "Dienstleistungen: Entkernung, Bad & Küche in Wien",
    description:
      "Komplettentkernung, Badentkernung und Küchenentkernung in Wien – inklusive Entsorgung. Leistungen von Wiener Entkernung.",
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Dienstleistungen
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Entkernung in Wien – unsere Leistungen
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
          Wiener Entkernung bietet Entkernung Wien für Wohnungen, Häuser und
          Gewerbeflächen: von der Komplettentkernung über Bad- und
          Küchenentkernung bis zur fachgerechten Entsorgung. Jeder Auftrag
          beginnt mit einer klaren Besichtigung und einem unverbindlichen
          Angebot – abgestimmt auf Ihren Termin und Ihre Folgearbeitsgänge.
        </p>
        <p className="mt-3 text-base leading-relaxed text-white/55">
          Ob Sanierung, Umbau oder Vorbereitung für Weiterverkauf: Ein
          strukturierter Rückbau spart Zeit und Kosten. Wir entfernen
          Innenausbau und Installationen so, dass Folgegewerke direkt starten
          können – sauber, termingerecht und mit Rücksicht auf Haus und
          Nachbarschaft. Ergänzend unterstützen wir bei Entrümpelung Wien und
          ausgewählten Abbrucharbeiten.
        </p>
      </header>

      <div className="mt-12">
        <h2 className="sr-only">Leistungsübersicht</h2>
        <ServiceCards headingLevel="h2" />
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Wann lohnt sich eine Entkernung?
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/60">
          Eine Entkernung in Wien lohnt sich vor größeren Sanierungen, wenn
          Böden, Sanitär oder Küchen komplett erneuert werden oder wenn
          Brand- und Wasserschäden eine gründliche Räumung erfordern. Auch vor
          dem Verkauf kann ein klarer Rohbauzustand die Weiterverwertung
          erleichtern. Wir beraten Sie ehrlich zum sinnvollen Umfang – ohne
          unnötige Leistungen.
        </p>
        <p className="mt-3 text-base leading-relaxed text-white/55">
          Details zu einzelnen Leistungen finden Sie auf den Unterseiten. Für
          ein konkretes Angebot genügt eine kurze Beschreibung Ihres Objekts –
          wir melden uns zeitnah.
        </p>
      </section>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Unverbindliches Angebot anfordern
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Schildern Sie kurz Ihr Projekt – wir melden uns rasch zu Entkernung
            und Entsorgung in Wien.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>
            Angebot für Entkernung in Wien anfragen
          </Link>
        </Button>
      </div>
    </div>
  );
}
