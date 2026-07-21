import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";
import { Button } from "@/components/ui/button";
import { routes, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projekte: Entkernung & Entrümpelung in Wien",
  description:
    "Vorher/Nachher-Beispiele für Entkernung, Rückbau und Entrümpelung in Wien – abgeschlossene Projekte von Wiener Entkernung.",
  alternates: { canonical: routes.projects },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.projects,
    siteName: siteConfig.shortName,
    title: "Projekte: Entkernung & Entrümpelung in Wien",
    description:
      "Vorher/Nachher-Beispiele für Entkernung, Rückbau und Entrümpelung in Wien – abgeschlossene Projekte von Wiener Entkernung.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Projekte
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Abgeschlossene Entkernungsprojekte in Wien
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
          Hier sehen Sie ausgewählte Beispiele für Entkernung Wien,
          Terrassenrückbau und Entrümpelung Wien – jeweils mit Vorher/Nachher-
          Vergleich. Die Fotos zeigen, wie wir Wohnungen und Freiflächen
          freiräumen, zurückbauen und für die weitere Nutzung übergeben.
        </p>
        <p className="mt-3 text-base leading-relaxed text-white/55">
          Jedes Projekt ist anders: Altbau, Brandschaden oder Balkonterrassen
          erfordern eigene Abläufe. Öffnen Sie ein Projekt für den detaillierten
          Vergleich und eine kurze Beschreibung. Für ein ähnliches Vorhaben
          erstellen wir gerne ein unverbindliches Angebot.
        </p>
      </header>

      <ProjectGrid />

      <section className="mt-14 max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Was die Beispiele zeigen
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/60">
          Unsere Projektfotos dokumentieren den Zustand vor und nach dem
          Einsatz. So erkennen Sie den Umfang von Komplettentkernung,
          Freiräumung und Entsorgung – ohne Werbeversprechen, sondern anhand
          realer Aufträge in Wien. Mehr zu den einzelnen Leistungen finden Sie
          unter{" "}
          <Link
            href={routes.services}
            className="font-semibold text-[#f2aa4c] hover:underline"
          >
            Entkernung und Rückbau-Leistungen in Wien
          </Link>
          .
        </p>
      </section>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Ähnliches Projekt geplant?
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Wir beraten Sie zu Entkernung, Abbruch und Entrümpelung in Wien.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>
            Projekt in Wien unverbindlich anfragen
          </Link>
        </Button>
      </div>
    </div>
  );
}
