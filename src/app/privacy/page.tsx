import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${siteConfig.name}.`,
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Datenschutz
      </h1>
      <p className="mt-2 text-muted-foreground">
        Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed sm:text-base">
        <section>
          <h2 className="font-heading text-lg font-semibold">1. Verantwortlicher</h2>
          <p className="mt-2">
            {siteConfig.legal.owner}
            <br />
            {siteConfig.legal.companyName}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.zip} {siteConfig.address.city}
            <br />
            E-Mail:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            2. Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-2 text-muted-foreground">
            Beim Besuch dieser Website werden automatisch Informationen
            erfasst (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite). Diese
            Daten dienen der technischen Bereitstellung und Sicherheit der
            Website.
          </p>
          <p className="mt-3 text-muted-foreground">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
            die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse,
            Telefonnummer, Inhalt der Nachricht), um Ihre Anfrage zu
            beantworten (Art. 6 Abs. 1 lit. b DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">3. Speicherdauer</h2>
          <p className="mt-2 text-muted-foreground">
            Personenbezogene Daten werden nur so lange gespeichert, wie es für
            die jeweiligen Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungspflichten bestehen.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">4. Ihre Rechte</h2>
          <p className="mt-2 text-muted-foreground">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch. Zudem können Sie sich bei der Österreichischen
            Datenschutzbehörde beschweren.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">5. Cookies</h2>
          <p className="mt-2 text-muted-foreground">
            Diese Website setzt derzeit keine nicht-essentiellen Tracking-Cookies
            ein. Technisch notwendige Cookies können für den Betrieb der Seite
            erforderlich sein.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">6. Aktualität</h2>
          <p className="mt-2 text-muted-foreground">
            Stand: {new Date().toLocaleDateString("de-AT", { year: "numeric", month: "long" })}.
            Wir behalten uns vor, diese Erklärung anzupassen, wenn sich
            Rechtslage oder unser Angebot ändern.
          </p>
        </section>
      </div>
    </article>
  );
}
