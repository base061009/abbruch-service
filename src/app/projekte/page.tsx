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
      "Vorher/Nachher-Beispiele für Entkernung, Rückbau und Entrümpelung in Wien.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Projekte
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Abgeschlossene Projekte in Wien
        </h1>
        <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
          Vorher/Nachher-Einblicke in Entkernung, Rückbau und Entrümpelung in
          Wien.
        </p>
      </header>

      <ProjectGrid />

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Ähnliches Projekt geplant?
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Unverbindliche Beratung zu Entkernung in Wien.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 shrink-0 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>Kontakt aufnehmen</Link>
        </Button>
      </div>
    </div>
  );
}
