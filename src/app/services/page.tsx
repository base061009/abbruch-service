import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description: `Komplettentkernung, Bad- und Küchenentkernung – Leistungen von ${siteConfig.name}.`,
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Dienstleistungen
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Alles aus einer Hand
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
          Von der ersten Besichtigung bis zur fachgerechten Entsorgung –
          kompakt, klar und auf Ihren Termin abgestimmt.
        </p>
      </header>

      <div className="mt-12">
        <ServiceCards />
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Unverbindliches Angebot anfordern
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Schildern Sie kurz Ihr Projekt – wir melden uns rasch.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
          <Link href="/contact">Kontakt aufnehmen</Link>
        </Button>
      </div>
    </div>
  );
}
