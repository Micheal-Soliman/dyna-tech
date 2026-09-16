import type { NextConfig } from "next";
import { isSafeSupabaseBrowserKey } from "./lib/cms/browser-key";

const browserKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if (browserKey && !isSafeSupabaseBrowserKey(browserKey)) {
  throw new Error("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be a publishable or anon key. Never expose a Supabase secret/service-role key to the browser.");
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
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
