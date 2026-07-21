import type { MetadataRoute } from "next";
import { routes, services, projects, siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] =
    [
      { path: routes.home, priority: 1, changeFrequency: "weekly" },
      { path: routes.services, priority: 0.9, changeFrequency: "monthly" },
      { path: routes.projects, priority: 0.8, changeFrequency: "monthly" },
      { path: routes.about, priority: 0.7, changeFrequency: "monthly" },
      { path: routes.contact, priority: 0.8, changeFrequency: "monthly" },
      { path: routes.imprint, priority: 0.3, changeFrequency: "monthly" },
      { path: routes.privacy, priority: 0.3, changeFrequency: "monthly" },
    ];

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}${routes.service(service.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}${routes.project(project.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...serviceRoutes,
    ...projectRoutes,
  ];
}
