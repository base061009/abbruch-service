import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${siteConfig.name} – Anruf oder E-Mail für Ihr Abbruchprojekt.`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  `Anfrage – ${siteConfig.name}`,
)}`;

const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`,
)}`;

export default function ContactPage() {
  return (
    <div className="relative w-full overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_top,_rgba(242,170,76,0.12),_transparent_60%)]"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Kontakt
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Einfach melden
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/60">
          Anruf oder kurze Mail – wir beraten Sie unverbindlich zu Abbruch,
          Entkernung und Entrümpelung.
        </p>
      </div>

      <div className="relative mx-auto mt-12 flex max-w-lg flex-col gap-4 sm:mt-14">
        <a
          href={siteConfig.phoneHref}
          className="group flex min-h-16 items-center gap-4 rounded-xl bg-[#f2aa4c] px-5 py-4 text-[#101820] transition-transform active:scale-[0.99] sm:px-6"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#101820]/10">
            <Phone className="size-5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs font-semibold tracking-wide uppercase opacity-70">
              Anrufen
            </span>
            <span className="mt-0.5 block text-lg font-bold tracking-tight sm:text-xl">
              {siteConfig.phone}
            </span>
          </span>
        </a>

        <a
          href={mailtoHref}
          className="group flex min-h-16 items-center gap-4 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-white transition-colors hover:border-[#f2aa4c]/45 hover:bg-white/[0.07] active:scale-[0.99] sm:px-6"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#f2aa4c]/15 text-[#f2aa4c]">
            <Mail className="size-5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs font-semibold tracking-wide text-white/50 uppercase">
              E-Mail schreiben
            </span>
            <span className="mt-0.5 block break-all text-base font-bold leading-snug tracking-tight text-[#f2aa4c] sm:text-lg">
              {siteConfig.email}
            </span>
          </span>
        </a>
      </div>

      <div className="relative mx-auto mt-12 max-w-lg border-t border-white/10 pt-8 text-center sm:mt-14">
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex max-w-full items-start gap-3 text-left transition-colors hover:text-[#f2aa4c]"
        >
          <MapPin
            className="mt-0.5 size-5 shrink-0 text-[#f2aa4c]"
            aria-hidden
          />
          <span>
            <span className="block text-xs font-semibold tracking-wide text-white/45 uppercase">
              Adresse
            </span>
            <span className="mt-1 block text-base leading-relaxed text-white/80">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.zip} {siteConfig.address.city}
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
