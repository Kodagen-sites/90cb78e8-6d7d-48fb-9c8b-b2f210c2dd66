import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import HomeHero from "@/components/home/HomeHero";
import ServiceCard from "@/components/ServiceCard";
import SEOHead from "@/components/seo/SEOHead";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/components/seo/structured-data";

const sd = siteConfig.seo.structuredData;
const brandInfo = {
  name: siteConfig.company.name,
  tagline: siteConfig.company.tagline,
  description: siteConfig.company.description,
  email: siteConfig.company.email,
  phone: siteConfig.company.phone,
  location: siteConfig.company.location,
  url: siteConfig.seo.siteUrl,
  socials: siteConfig.socials,
};

const jsonLd = [
  organizationSchema(brandInfo, {
    streetAddress: sd.address.streetAddress,
    addressLocality: sd.address.addressLocality,
    addressRegion: sd.address.addressRegion,
    postalCode: sd.address.postalCode,
    addressCountry: sd.address.addressCountry,
  }),
  localBusinessSchema({
    brand: brandInfo,
    address: {
      streetAddress: sd.address.streetAddress,
      addressLocality: sd.address.addressLocality,
      addressRegion: sd.address.addressRegion,
      postalCode: sd.address.postalCode,
      addressCountry: sd.address.addressCountry,
    },
    businessType: sd.businessType,
    priceRange: "$$",
    geo: sd.geo,
    hours: sd.hours.map((h) => ({
      dayOfWeek: h.days as any,
      opens: h.opens,
      closes: h.closes,
    })),
  }),
  websiteSchema({ brand: brandInfo }),
];

export default function HomePage() {
  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <HomeHero />

      {/* Trust bar */}
      <section className="border-y border-ink/10 bg-surface/30">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-6 md:px-10">
          {siteConfig.trustBar.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Intro / manifesto */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <FadeUp>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/40" />
                  {siteConfig.mixedMedia.accentEyebrow}
                </span>
              </FadeUp>
            </div>
            <div className="md:col-span-7">
              <FadeUp delay={0.05}>
                <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
                  {siteConfig.manifesto}
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-ink/65">
                  {siteConfig.aboutStory.split(". ").slice(0, 2).join(". ")}.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-contrast text-cream">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-20">
          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {siteConfig.stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-display text-[clamp(40px,6vw,72px)] font-light leading-none tracking-[-0.03em]">
                  {s.value}
                </div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeUp>
              <h2 className="max-w-[16ch] font-display text-[clamp(30px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
                {siteConfig.servicesHeading}
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 self-start text-sm font-medium text-primary transition-opacity hover:opacity-70"
              >
                View everything <ArrowRight size={16} />
              </Link>
            </FadeUp>
          </div>
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

      {/* Why us */}
      <section className="section-pad bg-surface/30">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <FadeUp>
            <h2 className="max-w-[14ch] font-display text-[clamp(30px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              {siteConfig.whyUs.heading}
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {siteConfig.whyUs.items.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="border-t border-ink/12 pt-6">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-ink/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <FadeUp>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              How it works
            </span>
            <h2 className="mt-4 max-w-[18ch] font-display text-[clamp(30px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              From first swing to second home
            </h2>
          </FadeUp>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.process.map((step, i) => (
              <FadeUp key={step.step} delay={i * 0.06}>
                <div>
                  <div className="font-display text-[clamp(48px,7vw,84px)] font-extralight leading-none text-primary/25">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink/65">
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBlock />
    </>
  );
}

export function CtaBlock() {
  return (
    <section className="relative overflow-hidden bg-contrast text-cream">
      <img
        src={assetImage("section-cta", "squash player action silhouette")}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        style={{ filter: "grayscale(0.3) contrast(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-contrast via-contrast/85 to-contrast/70" />
      <div className="relative mx-auto max-w-[1280px] px-5 py-24 text-center md:px-10 md:py-32">
        <FadeUp>
          <h2 className="mx-auto max-w-[16ch] font-display text-[clamp(34px,5.5vw,72px)] font-light leading-[1.02] tracking-[-0.02em]">
            {siteConfig.ctaBlock.heading}
          </h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-cream/70">
            {siteConfig.ctaBlock.description}
          </p>
        </FadeUp>
        <FadeUp delay={0.14}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              {siteConfig.cta.primary} <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              {siteConfig.cta.secondary}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
