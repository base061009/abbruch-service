import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/15 bg-[#101820]">
      <div className="flex w-full flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm text-white/55">
          © {year} {siteConfig.name}
        </p>
        <nav className="flex gap-4" aria-label="Rechtliches">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/55 transition-colors hover:text-[#f2aa4c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
