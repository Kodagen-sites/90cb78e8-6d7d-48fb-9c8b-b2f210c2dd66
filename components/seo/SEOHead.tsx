// components/seo/SEOHead.tsx — Next.js 16 App Router edition.
//
// Title / description / OG / Twitter / canonical are emitted via each page's
// `export const metadata` (or the buildMetadata helper below). This component
// renders the JSON-LD structured data (valid in the body in App Router) and is
// rendered by every page so structured data ships on every route.

import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

type Props = {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
  jsonLd?: object | object[];
  ogType?: "website" | "article" | "product" | "profile";
};

export function SEOHead({ jsonLd }: Props) {
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  if (jsonLdArray.length === 0) return null;
  return (
    <>
      {jsonLdArray.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default SEOHead;

/** Per-page metadata helper — call from `export const metadata` in a page. */
export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage,
  noindex = false,
  ogType = "website",
}: Props): Metadata {
  const cfg = (siteConfig as any).seo ?? {};
  const company = siteConfig.company;
  const finalTitle = title || cfg.defaultTitle || `${company.name} — ${company.tagline}`;
  const finalDescription = description || cfg.defaultDescription || company.description;
  const baseUrl = (cfg.siteUrl || "").replace(/\/$/, "");
  const canonicalUrl = baseUrl ? baseUrl + path : path;
  const finalOgImage = ogImage || cfg.defaultOgImage;

  return {
    title: finalTitle,
    description: finalDescription,
    ...(baseUrl ? { metadataBase: new URL(baseUrl), alternates: { canonical: canonicalUrl } } : {}),
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: ogType as any,
      title: finalTitle,
      description: finalDescription,
      url: canonicalUrl,
      siteName: company.name,
      locale: cfg.locale || "en_US",
      ...(finalOgImage ? { images: [{ url: finalOgImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      ...(finalOgImage ? { images: [finalOgImage] } : {}),
      ...(cfg.twitterHandle ? { site: cfg.twitterHandle } : {}),
    },
  };
}
