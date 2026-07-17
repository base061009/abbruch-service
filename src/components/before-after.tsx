"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = "Vorher",
  afterAlt = "Nachher",
  className,
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [position, setPosition] = useState(50);

  const moveTo = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    if (width <= 0) return;
    const next = ((clientX - left) / width) * 100;
    setPosition(Math.min(97, Math.max(3, next)));
  }, []);

  return (
    <div className={cn(className)}>
      <div
        ref={containerRef}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-label="Vorher-Nachher Vergleich"
        className="relative aspect-[3/4] w-full touch-none select-none overflow-hidden rounded-xl bg-[#143a4d] ring-1 ring-white/15 lg:aspect-[5/4] lg:min-h-[28rem] xl:min-h-[32rem]"
        onPointerDown={(e) => {
          e.preventDefault();
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          moveTo(e.clientX);
        }}
        onPointerUp={(e) => {
          dragging.current = false;
          if (e.currentTarget.hasPointerCapture(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
          }
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
      >
        {/* Nachher (volle Fläche) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterSrc}
          alt={afterAlt}
          draggable={false}
          className="pointer-events-none absolute inset-0 size-full object-cover"
        />

        {/* Vorher (links, per clip-path) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeSrc}
          alt={beforeAlt}
          draggable={false}
          className="pointer-events-none absolute inset-0 size-full object-cover"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />

        {/* Trennlinie + Griff */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-1 -translate-x-1/2 bg-[#ffcf00]"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffcf00] text-sm font-bold text-[#0f3040] shadow-lg ring-2 ring-[#0f3040]">
            ↔
          </div>
        </div>

        <span className="pointer-events-none absolute top-3 left-3 z-10 rounded bg-[#0f3040]/85 px-2 py-1 text-xs font-semibold text-white">
          Vorher
        </span>
        <span className="pointer-events-none absolute top-3 right-3 z-10 rounded bg-[#ffcf00] px-2 py-1 text-xs font-semibold text-[#0f3040]">
          Nachher
        </span>
      </div>
    </div>
  );
}
