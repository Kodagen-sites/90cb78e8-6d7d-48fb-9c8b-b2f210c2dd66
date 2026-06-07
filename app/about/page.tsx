import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import PageHero from "@/components/PageHero";
import SEOHead, { buildMetadata } from "@/components/seo/SEOHead";
import FadeUp from "@/components/motion/FadeUp";
import { CtaBlock } from "@/app/page";
import { organizationSchema, breadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: `About — ${siteConfig.company.name}`,
  description: siteConfig.aboutStory.slice(0, 155),
  path: "/about",
});

export default function AboutPage() {
  const jsonLd = [
    organizationSchema(
      {
        name: siteConfig.company.name,
        description: siteConfig.company.description,
        email: siteConfig.company.email,
        phone: siteConfig.company.phone,
        location: siteConfig.company.location,
        url: siteConfig.seo.siteUrl,
        socials: siteConfig.socials,
      },
    ),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.seo.siteUrl + "/" },
      { name: "About", url: siteConfig.seo.siteUrl + "/about" },
    ]),
  ];

  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <PageHero
        eyebrow="About the club"
        title={siteConfig.aboutHeading}
        image={assetImage("section-about-hero", "modern squash club interior")}
        intro={siteConfig.company.description}
      />

      {/* Story */}
      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <FadeUp>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  <span className="mr-3 inline-block h-px w-10 align-middle bg-primary/40" />
                  Our story
                </span>
              </FadeUp>
            </div>
            <div className="md:col-span-8">
              <FadeUp delay={0.05}>
                <p className="font-display text-[clamp(22px,3vw,34px)] font-light leading-[1.25] tracking-[-0.01em] text-ink">
                  {siteConfig.manifesto}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-8 text-lg leading-relaxed text-ink/65">
                  {siteConfig.aboutStory}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
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

      {/* Values */}
      <section className="section-pad bg-surface/30">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <FadeUp>
            <h2 className="max-w-[16ch] font-display text-[clamp(30px,4.5vw,56px)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              What we stand for
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {siteConfig.values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06}>
                <div className="border-t border-ink/12 pt-6">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-ink/65">
                    {v.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
