import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import PageHero from "@/components/PageHero";
import SEOHead, { buildMetadata } from "@/components/seo/SEOHead";
import ContactForm from "@/components/contact/ContactForm";
import { SocialLinks } from "@/components/social-icons";
import { breadcrumbSchema, localBusinessSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: `Contact — ${siteConfig.company.name}`,
  description:
    "Book a court, try a lesson or just come and watch a game. Get in touch with " + siteConfig.company.name + ".",
  path: "/contact",
});

const sd = siteConfig.seo.structuredData;

export default function ContactPage() {
  const jsonLd = [
    breadcrumbSchema([
      { name: "Home", url: siteConfig.seo.siteUrl + "/" },
      { name: "Contact", url: siteConfig.seo.siteUrl + "/contact" },
    ]),
    localBusinessSchema({
      brand: {
        name: siteConfig.company.name,
        description: siteConfig.company.description,
        email: siteConfig.company.email,
        phone: siteConfig.company.phone,
        location: siteConfig.company.location,
        url: siteConfig.seo.siteUrl,
        socials: siteConfig.socials,
      },
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
      hours: sd.hours.map((h) => ({ dayOfWeek: h.days as any, opens: h.opens, closes: h.closes })),
    }),
  ];

  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <PageHero
        eyebrow="Get in touch"
        title="Come and play"
        image={assetImage("section-contact-hero", "sports club reception desk")}
        intro="The first step onto the court is the only hard one. Send us a message and we'll get you on it."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-14 md:grid-cols-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-7">
              <h2 className="font-display text-[clamp(24px,3vw,38px)] font-light tracking-[-0.02em] text-ink">
                Send us a message
              </h2>
              <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/60">
                Tell us whether you're brand new to squash or coming back to it — we'll point you the right way.
              </p>
              <div className="mt-9">
                <ContactForm />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-ink/10 bg-surface/40 p-8">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  Find the club
                </h3>
                <ul className="mt-6 space-y-5 text-[15px]">
                  <Detail icon={<MapPin size={16} />} label="Where">
                    {siteConfig.company.location}
                  </Detail>
                  <Detail icon={<Mail size={16} />} label="Email">
                    <a href={`mailto:${siteConfig.company.email}`} className="text-primary underline-offset-2 hover:underline">
                      {siteConfig.company.email}
                    </a>
                  </Detail>
                  <Detail icon={<Phone size={16} />} label="Phone">
                    <a href={`tel:${siteConfig.company.phone}`} className="text-primary underline-offset-2 hover:underline">
                      {siteConfig.company.phone}
                    </a>
                  </Detail>
                  <Detail icon={<Clock size={16} />} label="Opening hours">
                    <span className="block">Mon–Fri · 07:00 – 23:00</span>
                    <span className="block">Sat–Sun · 08:00 – 21:00</span>
                  </Detail>
                </ul>

                <div className="mt-8 border-t border-ink/10 pt-6">
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">Follow the club</span>
                  <SocialLinks socials={siteConfig.socials} className="mt-3 gap-4 text-ink/70" iconClassName="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-ink/45">{label}</span>
        <span className="mt-0.5 block text-ink/80">{children}</span>
      </span>
    </li>
  );
}
