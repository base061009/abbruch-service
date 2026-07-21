import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfter } from "@/components/before-after";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  getProjectBySlug,
  projects,
  routes,
  siteConfig,
} from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.title} – Entkernung ${project.location}`;
  const description = project.description;
  const path = routes.project(project.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.shortName,
      title,
      description,
      images: [
        {
          url: absoluteUrl(project.after),
          alt: project.afterAlt,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: absoluteUrl(routes.project(project.slug)),
    dateCreated: project.year,
    locationCreated: {
      "@type": "Place",
      name: project.location,
    },
    image: [absoluteUrl(project.before), absoluteUrl(project.after)],
    creator: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-xs font-semibold tracking-[0.2em] text-[#f2aa4c] uppercase">
        <Link href={routes.projects} className="hover:underline">
          Projekte
        </Link>
        <span aria-hidden> · </span>
        {project.location} · {project.year}
      </p>

      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {project.title} in {project.location}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-white/65">
        {project.description}
      </p>

      <div className="mt-10">
        <BeforeAfter
          beforeSrc={project.before}
          afterSrc={project.after}
          beforeAlt={project.beforeAlt}
          afterAlt={project.afterAlt}
        />
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 px-6 py-7 sm:flex-row sm:items-center sm:px-8">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            Ähnliches Projekt geplant?
          </h2>
          <p className="mt-1 text-sm text-white/55">
            Wir beraten Sie unverbindlich zu Entkernung und Entrümpelung in Wien.
          </p>
        </div>
        <Button asChild size="lg" className="h-11 rounded-lg px-8 font-semibold">
          <Link href={routes.contact}>Kontakt aufnehmen</Link>
        </Button>
      </div>

      {related.length > 0 && (
        <div className="mt-14 border-t border-white/10 pt-10">
          <h2 className="text-lg font-bold text-white">Weitere Projekte</h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={routes.project(item.slug)}
                  className="font-semibold text-[#f2aa4c] hover:underline"
                >
                  {item.title}
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
