import type { MetadataRoute } from "next";

// TODO: Update to final domain once confirmed with client
const SITE_URL = "https://www.acustomcoach.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
