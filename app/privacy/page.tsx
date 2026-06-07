import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/components/seo/SEOHead";

export const metadata: Metadata = buildMetadata({
  title: `Privacy Policy — ${siteConfig.company.name}`,
  description: `How ${siteConfig.company.name} collects, uses and protects your personal data.`,
  path: "/privacy",
  noindex: true,
});

const updated = "June 2026";

export default function PrivacyPage() {
  return (
    <article className="section-pad pt-36 md:pt-44">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Legal</span>
        <h1 className="mt-4 font-display text-[clamp(34px,5vw,60px)] font-light tracking-[-0.02em] text-ink">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink/50">Last updated {updated}</p>

        <div className="prose-club mt-12 space-y-8 text-[15px] leading-relaxed text-ink/70">
          <Section title="Who we are">
            {siteConfig.company.name} ({siteConfig.company.location}) operates this website. If you have any questions
            about this policy, contact us at{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
              {siteConfig.company.email}
            </a>
            .
          </Section>
          <Section title="What we collect">
            When you contact us or book a court, we collect the details you give us — typically your name, email,
            phone number and any message content. We also collect basic, anonymised analytics about how the site is used.
          </Section>
          <Section title="How we use it">
            We use your information only to respond to your enquiry, manage bookings and memberships, and keep you
            informed about the club where you've asked us to. We never sell your data.
          </Section>
          <Section title="Your rights">
            Under the GDPR you may request access to, correction of, or deletion of your personal data at any time.
            Email us and we'll action your request within 30 days.
          </Section>
          <Section title="Cookies">
            We use essential cookies to make the site work and, with your consent, analytics cookies to understand
            traffic. You can disable cookies in your browser settings.
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-ink">{title}</h2>
      <p className="mt-3">{children}</p>
    </section>
  );
}
