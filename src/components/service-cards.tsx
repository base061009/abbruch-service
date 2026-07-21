import {
  Bath,
  Building2,
  CookingPot,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { routes, services } from "@/lib/site-config";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  Building2,
  Bath,
  CookingPot,
};

type ServiceCardsProps = {
  /** Use h3 under a page section that already has an h2. */
  headingLevel?: "h2" | "h3";
};

export function ServiceCards({ headingLevel = "h2" }: ServiceCardsProps) {
  const Heading = headingLevel;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.slug}
            className="rounded-xl border border-white/12 bg-[#1a252f] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:border-[#f2aa4c]/40 hover:bg-[#1f2d3a] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
          >
            <Link
              href={routes.service(service.slug)}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2aa4c]"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-[#f2aa4c] text-[#101820]">
                <Icon className="size-5" aria-hidden />
              </span>
              <Heading className="mt-5 text-xl font-bold tracking-tight text-white">
                {service.title}
              </Heading>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>
              <p className="mt-4 text-sm font-semibold text-[#f2aa4c]">
                {service.shortTitle} im Detail →
              </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
