import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { routes, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Entkernung Wien – Leistungen | Wiener Entkernung" },
  description:
    "Entkernung Wien: Komplett-, Bad- und Küchenentkernung. Wohnung oder Gewerbe entkernen – inkl. Entsorgung. Unverbindliches Angebot.",
  alternates: { canonical: routes.services },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.services,
    siteName: siteConfig.shortName,
    title: "Entkernung Wien – Leistungen | Wiener Entkernung",
    description:
      "Entkernung Wien: Komplett-, Bad- und Küchenentkernung. Wohnung oder Gewerbe entkernen – inkl. Entsorgung.",
  },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Dienstleistungen
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Entkernung Wien
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
          Sie wollen eine Wohnung oder Gewerbefläche in Wien entkernen? Wir
          übernehmen Komplett-, Bad- und Küchenentkernung inklusive Entsorgung –
          klar geplant und termingerecht.
        </p>
      </header>

      <div className="mt-12">
        <ServiceCards headingLevel="h2" />
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Unverbindliches Angebot
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Kurz schildern, was Sie in Wien entkernen möchten – wir melden uns.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 shrink-0 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>Kontakt aufnehmen</Link>
        </Button>
      </div>
    </div>
  );
}
