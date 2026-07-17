import { siteConfig } from "@/lib/site-config";

type ImpressumProps = {
  className?: string;
};

/**
 * Eigenständige Impressum-Komponente (österreichisches MedienG / ECG).
 * Inhalte aus der zentralen siteConfig.
 */
export function Impressum({ className }: ImpressumProps) {
  const { legal, address, phone, email, name } = siteConfig;

  return (
    <article className={className}>
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Impressum
      </h1>
      <p className="mt-2 text-muted-foreground">
        Angaben gemäß § 5 ECG und § 24 MedienG
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed sm:text-base">
        <section>
          <h2 className="font-heading text-lg font-semibold">Medieninhaber</h2>
          <p className="mt-2">
            {legal.companyName}
            <br />
            {legal.legalForm}
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">Sitz / Anschrift</h2>
          <p className="mt-2">
            {address.street}
            <br />
            {address.zip} {address.city}
            <br />
            {address.country}
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">Kontakt</h2>
          <p className="mt-2">
            Telefon:{" "}
            <a href={siteConfig.phoneHref} className="text-primary hover:underline">
              {phone}
            </a>
            <br />
            E-Mail:{" "}
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">Vertretung</h2>
          <p className="mt-2">Geschäftsführer: {legal.managingDirector}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            Firmenbuch & UID
          </h2>
          <p className="mt-2">
            Firmenbuchnummer: {legal.companyRegister}
            <br />
            Firmenbuchgericht: {legal.registerCourt}
            <br />
            UID-Nummer: {legal.uid}
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            Mitgliedschaft
          </h2>
          <p className="mt-2">{legal.chamber}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            Unternehmensgegenstand
          </h2>
          <p className="mt-2">
            Abbruch-, Entkernungs- und Entrümpelungsarbeiten sowie damit
            verbundene Dienstleistungen unter dem Namen {name}.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            Haftungsausschluss
          </h2>
          <p className="mt-2 text-muted-foreground">
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich. Alle Angaben ohne Gewähr.
          </p>
        </section>
      </div>
    </article>
  );
}
