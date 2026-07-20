"use client";

import Image from "next/image";
import { useState } from "react";
import { BeforeAfter } from "@/components/before-after";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/lib/site-config";

type Project = (typeof projects)[number];

export function ProjectGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <ul className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="h-full">
            <button
              type="button"
              onClick={() => setSelected(project)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1a252f] text-left shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 hover:border-[#f2aa4c]/35 hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)] focus-visible:ring-2 focus-visible:ring-[#f2aa4c] focus-visible:outline-none"
            >
              <div className="grid shrink-0 grid-cols-2 gap-px bg-white/10">
                <div className="relative aspect-[4/3] bg-[#151d26]">
                  <Image
                    src={project.before}
                    alt={`${project.title} – Vorher`}
                    fill
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    unoptimized
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-[#101820]/85 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                    Vorher
                  </span>
                </div>
                <div className="relative aspect-[4/3] bg-[#151d26]">
                  <Image
                    src={project.after}
                    alt={`${project.title} – Nachher`}
                    fill
                    className="object-cover transition-transform group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    unoptimized
                  />
                  <span className="absolute right-2 bottom-2 rounded bg-[#f2aa4c] px-1.5 py-0.5 text-[10px] font-semibold text-[#101820]">
                    Nachher
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-white/45 uppercase">
                  <span>{project.location}</span>
                  <span aria-hidden>·</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="mt-2 text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#f2aa4c]">
                  Vergleich öffnen →
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>
                  {selected.location} · {selected.year} — {selected.description}
                </DialogDescription>
              </DialogHeader>
              <BeforeAfter
                beforeSrc={selected.before}
                afterSrc={selected.after}
                beforeAlt={`${selected.title} – Vorher`}
                afterAlt={`${selected.title} – Nachher`}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
