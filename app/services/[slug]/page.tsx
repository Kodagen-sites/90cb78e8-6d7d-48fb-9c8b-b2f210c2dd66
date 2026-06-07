import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import PageHero from "@/components/PageHero";
import SEOHead, { buildMetadata } from "@/components/seo/SEOHead";
import FadeUp from "@/components/motion/FadeUp";
import { CtaBlock } from "@/app/page";
import { breadcrumbSchema, serviceSchema } from "@/components/seo/structured-data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) return buildMetadata({ title: "Not found", path: `/services/${slug}` });
  return buildMetadata({
    title: `${svc.name} — ${siteConfig.company.name}`,
    description: svc.description.slice(0, 155),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const svc = siteConfig.services.find((s) => s.slug === slug);
  if (!svc) notFound();

  const others = siteConfig.services.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = [
    serviceSchema({
      service: { name: svc.name, description: svc.description, slug: svc.slug },
      provider: {
        name: siteConfig.company.name,
        description: siteConfig.company.description,
        email: siteConfig.company.email,
        phone: siteConfig.company.phone,
        location: siteConfig.company.location,
        url: siteConfig.seo.siteUrl,
      },
      areaServed: "Amsterdam, Netherlands",
      serviceUrl: `${siteConfig.seo.siteUrl}/services/${svc.slug}`,
    }),
    breadcrumbSchema([
      { name: "Home", url: siteConfig.seo.siteUrl + "/" },
      { name: "Services", url: siteConfig.seo.siteUrl + "/services" },
      { name: svc.name, url: `${siteConfig.seo.siteUrl}/services/${svc.slug}` },
    ]),
  ];

  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <PageHero
        eyebrow="Services"
        title={svc.name}
        image={assetImage(`service-${svc.slug}`, svc.name)}
        intro={svc.description}
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-70"
          >
            <ArrowLeft size={16} /> All services
          </Link>

          <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <FadeUp>
                <h2 className="font-display text-[clamp(26px,3.5vw,44px)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
                  {svc.name}
                </h2>
              </FadeUp>
              <FadeUp delay={0.05}>
                <p className="mt-6 text-lg leading-relaxed text-ink/65">
                  {svc.description}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="mt-5 text-lg leading-relaxed text-ink/65">
                  Whether you're brand new to the game or sharpening a serious
                  competitive edge, our team will help you make the most of it.
                  Drop us a message and we'll get you on court.
                </p>
              </FadeUp>
              <FadeUp delay={0.15}>
                <Link
                  href="/contact"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
                >
                  {siteConfig.cta.primary} <ArrowUpRight size={16} />
                </Link>
              </FadeUp>
            </div>

            {svc.highlights && svc.highlights.length > 0 && (
              <div className="md:col-span-5">
                <FadeUp delay={0.1}>
                  <div className="rounded-2xl border border-ink/10 bg-surface/40 p-8">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                      What's included
                    </h3>
                    <ul className="mt-6 space-y-4">
                      {svc.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check size={12} />
                          </span>
                          <span className="text-[15px] leading-relaxed text-ink/80">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad bg-surface/30">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <h2 className="font-display text-[clamp(24px,3vw,40px)] font-light tracking-[-0.02em] text-ink">
            More at the club
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-ink/10 bg-bg p-7 transition-all hover:border-ink/20 hover:shadow-[0_24px_60px_-28px_rgba(14,28,51,0.4)]"
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{o.name}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/60">
                    {o.description.split(".")[0]}.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary">
                  Explore
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
