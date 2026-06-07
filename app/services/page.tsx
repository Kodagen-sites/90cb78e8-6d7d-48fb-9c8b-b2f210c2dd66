import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import SEOHead, { buildMetadata } from "@/components/seo/SEOHead";
import { StaggerChildren } from "@/components/motion/FadeUp";
import { CtaBlock } from "@/app/page";
import { breadcrumbSchema, serviceSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: `What we offer — ${siteConfig.company.name}`,
  description: siteConfig.seo.defaultDescription,
  path: "/services",
});

const brandInfo = {
  name: siteConfig.company.name,
  description: siteConfig.company.description,
  email: siteConfig.company.email,
  phone: siteConfig.company.phone,
  location: siteConfig.company.location,
  url: siteConfig.seo.siteUrl,
};

export default function ServicesPage() {
  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", url: siteConfig.seo.siteUrl + "/" },
      { name: "Services", url: siteConfig.seo.siteUrl + "/services" },
    ]),
    ...siteConfig.services.map((svc) =>
      serviceSchema({
        service: { name: svc.name, description: svc.description, slug: svc.slug },
        provider: brandInfo,
        areaServed: "Amsterdam, Netherlands",
        serviceUrl: `${siteConfig.seo.siteUrl}/services/${svc.slug}`,
      }),
    ),
  ];

  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <PageHero
        eyebrow="Everything the club offers"
        title={siteConfig.servicesHeading}
        image={assetImage("section-services-hero", "squash court glass back wall")}
        intro="Courts, coaching, leagues and a junior academy — whatever brings you to the club, there's a way in."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((svc) => (
              <ServiceCard
                key={svc.slug}
                name={svc.name}
                slug={svc.slug}
                description={svc.description}
                highlights={svc.highlights}
                image={assetImage(`service-${svc.slug}`, svc.name)}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
