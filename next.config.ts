import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/dienstleistungen",
        permanent: true,
      },
      {
        source: "/services/:slug",
        destination: "/dienstleistungen/:slug",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/projekte",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/projekte/:slug",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/imprint",
        destination: "/impressum",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/datenschutz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
