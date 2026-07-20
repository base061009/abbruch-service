import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Lernen Sie ${siteConfig.name} kennen – Ihr Partner für Abbruch und Entkernung in Österreich.`,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.81.11v-3.55a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.16 15.7a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.83a8.18 8.18 0 0 0 4.76 1.52V6.91a4.84 4.84 0 0 1-1.01-.22z" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <header>
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          Über uns
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 text-base text-white/60 sm:text-lg">
          Abbruch und Entkernung mit Haltung.
        </p>
      </header>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-white/75">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <p>
          Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi
          a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam
          ultrices.
        </p>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
          Folgen Sie uns
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f2aa4c]/40 hover:text-[#f2aa4c]"
          >
            <InstagramIcon className="size-4" />
            Instagram
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#f2aa4c]/40 hover:text-[#f2aa4c]"
          >
            <TikTokIcon className="size-4" />
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
