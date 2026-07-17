import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie ${siteConfig.name} – Anruf oder Nachricht für Ihr Abbruchprojekt.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="w-full px-5 py-14 sm:px-8 sm:py-20 lg:px-12 xl:px-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#ffcf00] uppercase">
          Kontakt
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Kontakt aufnehmen
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-white/60">
          Kurz anrufen oder Nachricht schreiben – wir beraten Sie unverbindlich.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-x-24 xl:gap-x-32 lg:gap-y-16">
        <div className="space-y-8 lg:pr-6">
          <div className="rounded-xl border border-white/10 p-6 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Direkt anrufen
            </h2>
            <p className="mt-2 text-sm text-white/55">
              Auf dem Handy öffnet sich die Telefon-App.
            </p>
            <Button asChild size="lg" className="mt-5 h-11 rounded-lg px-6 font-semibold">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" />
                Anrufen – {siteConfig.phone}
              </a>
            </Button>
          </div>

          <div className="space-y-2 text-sm text-white/55">
            <p>
              <span className="font-semibold text-white">E-Mail:</span>{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#ffcf00] hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Adresse:</span>{" "}
              {siteConfig.address.street}, {siteConfig.address.zip}{" "}
              {siteConfig.address.city}
            </p>
          </div>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-12 xl:pl-16">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Nachricht per E-Mail
          </h2>
          <p className="mt-1 mb-6 text-sm text-white/55">
            Formular wird über Resend zugestellt.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
