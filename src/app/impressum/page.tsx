import type { Metadata } from "next";
import { Impressum } from "@/components/impressum";
import { routes, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: routes.imprint },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: routes.imprint,
    siteName: siteConfig.shortName,
    title: `Impressum | ${siteConfig.shortName}`,
    description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}.`,
  },
};

export default function ImprintPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <Impressum />
    </div>
  );
}
