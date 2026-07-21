import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { routes, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Abgeschlossene Entkernungsprojekte in Wien",
  description: `Einblicke in abgeschlossene Abbruch- und Entkernungsprojekte von ${siteConfig.name} in Wien.`,
  alternates: { canonical: routes.projects },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.projects,
    siteName: siteConfig.shortName,
    title: "Abgeschlossene Entkernungsprojekte in Wien",
    description: `Einblicke in abgeschlossene Abbruch- und Entkernungsprojekte von ${siteConfig.name} in Wien.`,
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
          Abgeschlossene Entkernungsprojekte in Wien
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
          Vorher/Nachher-Einblicke in Rückbau, Entkernung und Entrümpelung –
          öffnen Sie ein Projekt für den Vergleich.
        </p>
      </header>

      <ProjectGrid />
    </div>
  );
}
