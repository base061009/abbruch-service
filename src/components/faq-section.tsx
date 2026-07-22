import Link from "next/link";
import { faqs, routes } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  className?: string;
  heading?: string;
  intro?: string;
};

export function FaqSection({
  className,
  heading = "Häufige Fragen",
  intro = "Kurze Antworten zu Entkernung, Ablauf und Entsorgung.",
}: FaqSectionProps) {
  return (
    <section className={cn(className)} aria-labelledby="faq-heading">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
        >
          {heading}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/60">
          {intro}
        </p>
      </header>

      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group py-5 open:pb-6"
          >
            <summary className="cursor-pointer list-none text-left text-lg font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                {faq.question}
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-[#f2aa4c] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/65">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <p className="mt-3 text-sm text-white/50">
        Weitere Fragen?{" "}
        <Link
          href={routes.contact}
          className="font-semibold text-[#f2aa4c] hover:underline"
        >
          Kontakt aufnehmen
        </Link>
      </p>
    </section>
  );
}
