# Wiener Entkernung

Website für Abbruch / Entkernung in Österreich – Next.js, Tailwind CSS, shadcn/ui.

## Start

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Zentrale Konfiguration

- Markenname, Kontakt, Social, Legal: `src/lib/site-config.ts`
- Farben (Navy / Gold): `src/app/globals.css` (`--brand` #101820, `--highlight` #F2AA4C)

## Seiten (URLs englisch)

| Seite | URL |
|-------|-----|
| Landing | `/` |
| Dienstleistungen | `/services` |
| Projekte | `/projects` |
| Über uns | `/about` |
| Kontakt | `/contact` |
| Impressum | `/imprint` |
| Datenschutz | `/privacy` |

## Kontaktformular (Resend)

In `.env.local`:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
