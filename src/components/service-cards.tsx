import {
  Bath,
  Building2,
  CookingPot,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site-config";

const icons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  Building2,
  Bath,
  CookingPot,
};

export function ServiceCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = icons[service.icon];
        return (
          <article
            key={service.slug}
            className="rounded-xl border border-white/12 bg-[#1a252f] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:border-[#f2aa4c]/40 hover:bg-[#1f2d3a] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-[#f2aa4c] text-[#101820]">
              <Icon className="size-5" aria-hidden />
            </span>
            <h2 className="mt-5 text-xl font-bold tracking-tight text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {service.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
