import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, footerLinks, navLinks, routes } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const addressLine = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`;
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(addressLine)}`;

  return (
    <footer className="mt-auto border-t border-white/15 bg-[#101820]">
      <div className="grid w-full gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12 xl:px-16">
        <div>
          <p className="font-brand text-lg font-semibold tracking-[0.04em] text-white uppercase">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
            Abbruch, Entkernung und Entrümpelung in Wien – von der Besichtigung
            bis zur sauberen Übergabe.
          </p>
          <address className="mt-5 space-y-2 text-sm not-italic text-white/70">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#f2aa4c]" aria-hidden />
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f2aa4c]"
              >
                {siteConfig.address.street}
                <br />
                {siteConfig.address.zip} {siteConfig.address.city}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-[#f2aa4c]" aria-hidden />
              <a href={siteConfig.phoneHref} className="hover:text-[#f2aa4c]">
                {siteConfig.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-[#f2aa4c]" aria-hidden />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all hover:text-[#f2aa4c]"
              >
                {siteConfig.email}
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer-Navigation">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f2aa4c]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rechtliches">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
            Rechtliches
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-[#f2aa4c]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={routes.contact}
                className="text-sm text-white/70 transition-colors hover:text-[#f2aa4c]"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10 px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-sm text-white/45">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
