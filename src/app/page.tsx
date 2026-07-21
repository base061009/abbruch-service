import Link from "next/link";
import type { Metadata } from "next";
import { BeforeAfter } from "@/components/before-after";
import { FaqJsonLd } from "@/components/faq-json-ld";
import { FaqSection } from "@/components/faq-section";
import { ServiceCards } from "@/components/service-cards";
import { Button } from "@/components/ui/button";
import {
  processSteps,
  projects,
  routes,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.title,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.shareText,
  },
};

export default function HomePage() {
  const featured = projects[0];

  return (
    <>
      <FaqJsonLd />

      <section className="grid w-full items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 xl:gap-24 lg:px-12 xl:px-16 lg:py-16">
        <div className="order-2 lg:order-1">
          <BeforeAfter
            beforeSrc={featured.before}
            afterSrc={featured.after}
            beforeAlt={featured.beforeAlt}
            afterAlt={featured.afterAlt}
          />
        </div>

        <div className="order-1 lg:order-2 lg:pl-2">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
            Abbruch · Entkernung · Entrümpelung
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
            Entkernung &amp; Abbruch in Wien
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65 sm:text-xl">
            {siteConfig.name} – professioneller Rückbau für Wohn- und
            Gewerbeobjekte. Von der Besichtigung bis zur sauberen Übergabe:
            klar, zuverlässig, termingerecht.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="h-11 rounded-lg px-8 text-base font-semibold"
            >
              <Link href={routes.contact}>Jetzt kontaktieren</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-lg border-2 border-[#f2aa4c]/70 bg-transparent px-8 text-base font-semibold text-[#f2aa4c] hover:bg-[#f2aa4c]/10 hover:text-[#f2aa4c]"
            >
              <Link href={routes.services}>Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
              Leistungen
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Entkernung für Wohnung, Bad und Küche
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
              Komplett-, Bad- und Küchenentkernung in Wien – inklusive Abtransport
              und Entsorgung.
            </p>
          </header>
          <div className="mt-10">
            <ServiceCards />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <header className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
              Ablauf
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Von der Anfrage bis zur Übergabe
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
              Vier klare Schritte – damit Ihr Rückbau planbar und terminsicher
              bleibt.
            </p>
          </header>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="border-t border-[#f2aa4c]/40 pt-5">
                <p className="text-xs font-semibold tracking-[0.18em] text-[#f2aa4c] uppercase">
                  Schritt {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
              Einsatzgebiet
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Wien und Umgebung
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
              Wir entkernen und entrümpeln Wohn- und Gewerbeobjekte in Wien.
              Projekte in ganz Österreich sind nach Absprache möglich.
            </p>
          </div>
          <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
            <Link href={routes.projects}>Projekte ansehen</Link>
          </Button>
        </div>
      </section>

      <div className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-5xl">
          <FaqSection />
        </div>
      </div>

      <section className="border-t border-white/10 px-5 py-14 sm:px-8 sm:py-16 lg:px-12 xl:px-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Unverbindliches Angebot anfordern
            </h2>
            <p className="mt-1 text-sm text-white/55">
              Schildern Sie kurz Ihr Projekt in Wien – wir melden uns rasch.
            </p>
          </div>
          <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
            <Link href={routes.contact}>Kontakt aufnehmen</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
