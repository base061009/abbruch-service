import { siteConfig } from "@/lib/site-config";

type ImpressumProps = {
  className?: string;
};

/**
 * Pflichtangaben gemäß § 5 ECG, § 63 GewO und § 25 MedienG
 * für nicht im Firmenbuch eingetragene Einzelunternehmen.
 */
export function Impressum({ className }: ImpressumProps) {
  const { legal, address, phone, email } = siteConfig;

  return (
    <article className={className}>
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Impressum
      </h1>
      <p className="mt-2 text-muted-foreground">
        Angaben gemäß § 5 ECG, § 63 GewO und § 25 MedienG
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed sm:text-base">
        <section>
          <h2 className="font-heading text-lg font-semibold">Medieninhaber</h2>
          <p className="mt-2">
            {legal.owner}
            <br />
            {legal.companyName}
          </p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">Anschrift</h2>
          <p className="mt-2">
            {address.street}
            <br />
            {address.zip} {address.city}
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
          <h2 className="font-heading text-lg font-semibold">
            Unternehmensgegenstand
          </h2>
          <p className="mt-2">{legal.tradeDescription}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold">
            Mitgliedschaft & Aufsicht
          </h2>
          <p className="mt-2">
            {legal.chamber}
            <br />
            GISA-Zahl: {legal.gisaNumber}
            <br />
            Aufsichtsbehörde: {legal.supervisoryAuthority}
            <br />
            Berufsrecht:{" "}
            <a
              href="https://www.ris.bka.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Gewerbeordnung (GewO)
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
