import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Abgeschlossene Projekte",
  description: `Einblicke in abgeschlossene Abbruch- und Entkernungsprojekte von ${siteConfig.name}.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Projekte
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Abgeschlossene Projekte
        </h1>
        <p className="mt-3 text-base leading-relaxed text-white/60 sm:text-lg">
          Tippen Sie auf ein Projekt, um den Vorher/Nachher-Vergleich zu öffnen.
        </p>
      </header>

      <ProjectGrid />
    </div>
  );
}
