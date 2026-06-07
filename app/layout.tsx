import type { Metadata } from "next";
import { Outfit, Figtree } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const seo = (siteConfig as any).seo ?? {};
const baseUrl: string = (seo.siteUrl || "").replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    default: seo.defaultTitle || `${siteConfig.company.name} — ${siteConfig.company.tagline}`,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: seo.defaultDescription || siteConfig.company.description,
  ...(baseUrl ? { metadataBase: new URL(baseUrl) } : {}),
  openGraph: {
    type: "website",
    siteName: siteConfig.company.name,
    locale: seo.locale || "en_US",
    title: seo.defaultTitle || siteConfig.company.name,
    description: seo.defaultDescription || siteConfig.company.description,
  },
  twitter: {
    card: "summary_large_image",
    ...(seo.twitterHandle ? { site: seo.twitterHandle } : {}),
  },
  ...(seo.googleSiteVerification
    ? { verification: { google: seo.googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={seo.htmlLang || "en"} className={`${outfit.variable} ${figtree.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
