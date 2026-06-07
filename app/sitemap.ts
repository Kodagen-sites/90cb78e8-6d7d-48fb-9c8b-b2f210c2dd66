import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

const baseUrl = (siteConfig.seo.siteUrl || "https://example.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/about", "/services", "/work", "/contact"].map((path) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = siteConfig.services.map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
