import Link from "next/link";
import type { Metadata } from "next";
import { BeforeAfter } from "@/components/before-after";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Start",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <section className="grid w-full items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 xl:gap-24 lg:px-12 xl:px-16 lg:py-16">
      <div className="order-2 lg:order-1">
        <BeforeAfter
          beforeSrc="/pics/vorher-1.jpeg"
          afterSrc="/pics/nachher-1.jpeg"
          beforeAlt="Projekt vorher"
          afterAlt="Projekt nachher"
        />
      </div>

      <div className="order-1 lg:order-2 lg:pl-2">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#ffcf00] uppercase">
          Abbruch · Entkernung · Entrümpelung
        </p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-6xl">
          Von der Besichtigung bis zur sauberen Übergabe
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/65 sm:text-xl">
          {siteConfig.name} – professioneller Rückbau für Wohn- und
          Gewerbeobjekte in Österreich. Klar, zuverlässig, termingerecht.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-11 rounded-lg px-8 text-base font-semibold"
          >
            <Link href="/contact">Jetzt kontaktieren</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 rounded-lg border-2 border-[#ffcf00]/70 bg-transparent px-8 text-base font-semibold text-[#ffcf00] hover:bg-[#ffcf00]/10 hover:text-[#ffcf00]"
          >
            <Link href="/about">Mehr erfahren</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
