import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  Building2,
  CookingPot,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  getServiceBySlug,
  routes,
  services,
  siteConfig,
} from "@/lib/site-config";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  Building2,
  Bath,
  CookingPot,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const title = `${service.shortTitle} | ${siteConfig.shortName}`;
  const description = `${service.description} Fachgerecht, termingerecht – Wiener Entkernung.`;
  const path = routes.service(service.slug);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.shortName,
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = icons[service.icon];
  const otherServices = services.filter((item) => item.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.longDescription,
    url: absoluteUrl(routes.service(service.slug)),
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "City",
      name: "Wien",
    },
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
        <Link href={routes.services} className="hover:underline">
          Dienstleistungen
        </Link>
      </p>

      <div className="mt-5 flex size-12 items-center justify-center rounded-lg bg-[#f2aa4c] text-[#101820]">
        <Icon className="size-6" aria-hidden />
      </div>

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {service.shortTitle}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-white/65">
        {service.longDescription}
      </p>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
        {service.body.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold text-white">Leistungsinhalte</h2>
      <ul className="mt-4 space-y-3">
        {service.highlights.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-base leading-relaxed text-white/70"
          >
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f2aa4c]" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Angebot für {service.title} in Wien
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Unverbindlich und schnell – wir melden uns bei Ihnen.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 shrink-0 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>Kontakt aufnehmen</Link>
        </Button>
      </div>

      {otherServices.length > 0 && (
        <div className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-lg font-bold text-white">Weitere Leistungen</h2>
          <ul className="mt-4 space-y-3">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={routes.service(item.slug)}
                  className="font-semibold text-[#f2aa4c] hover:underline"
                >
                  {item.shortTitle}
                </Link>
                <p className="mt-1 text-sm text-white/55">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
