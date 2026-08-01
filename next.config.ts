import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale/about",
        destination: "/:locale/about-us",
        permanent: true,
      },
      {
        source: "/:locale/career",
        destination: "/:locale/careers",
        permanent: true,
      },
      {
        source: "/:locale/knowledge",
        destination: "/:locale/tech-info",
        permanent: true,
      },
      {
        source: "/:locale/knowledge/:slug",
        destination: "/:locale/tech-info/:slug",
        permanent: true,
      },
      {
        source: "/:locale/services",
        destination: "/:locale/technology-partners",
        permanent: true,
      },
      {
        source: "/:locale/services/:slug",
        destination: "/:locale/technology-partners/:slug",
        permanent: true,
      },
      {
        source: "/:locale/case-study",
        destination: "/:locale/the-auto-hub",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
