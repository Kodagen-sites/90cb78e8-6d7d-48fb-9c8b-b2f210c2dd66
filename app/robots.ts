import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

const baseUrl = (siteConfig.seo.siteUrl || "").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: siteConfig.seo.noindexPaths?.length
        ? [...siteConfig.seo.noindexPaths, "/privacy", "/terms"]
        : ["/privacy", "/terms"],
    },
    ...(baseUrl ? { sitemap: `${baseUrl}/sitemap.xml`, host: baseUrl } : {}),
  };
}
