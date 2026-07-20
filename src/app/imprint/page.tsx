import type { Metadata } from "next";
import { Impressum } from "@/components/impressum";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/imprint" },
  openGraph: { url: "/imprint" },
};

export default function ImprintPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <Impressum />
    </div>
  );
}
