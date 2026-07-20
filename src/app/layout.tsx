import type { Metadata, Viewport } from "next";
import { Source_Serif_4, Oswald, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    // Relative → resolved via metadataBase (never VERCEL_URL)
    url: "/",
    siteName: siteConfig.shortName,
    title: siteConfig.title,
    description: siteConfig.shareText,
    // Absolute URLs: Next.js otherwise may rewrite relative og:image via VERCEL_URL
    images: [
      {
        url: siteConfig.ogImageAbsolute,
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} – Abbruch & Entkernung`,
      },
      {
        url: siteConfig.ogImageSquareAbsolute,
        type: "image/jpeg",
        width: 400,
        height: 400,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.shareText,
    images: [siteConfig.ogImageAbsolute],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#101820",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImageAbsolute,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "AT",
    },
    areaServed: [
      { "@type": "City", name: "Wien" },
      { "@type": "Country", name: "Österreich" },
    ],
  };

  return (
    <html
      lang="de-AT"
      className={`${sourceSerif.variable} ${oswald.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#101820] font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1 bg-[#101820]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
