import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/components/seo/SEOHead";

export const metadata: Metadata = buildMetadata({
  title: `Terms of Service — ${siteConfig.company.name}`,
  description: `The terms that govern use of the ${siteConfig.company.name} website, bookings and memberships.`,
  path: "/terms",
  noindex: true,
});

const updated = "June 2026";

export default function TermsPage() {
  return (
    <article className="section-pad pt-36 md:pt-44">
      <div className="mx-auto max-w-[760px] px-5 md:px-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">Legal</span>
        <h1 className="mt-4 font-display text-[clamp(34px,5vw,60px)] font-light tracking-[-0.02em] text-ink">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-ink/50">Last updated {updated}</p>

        <div className="mt-12 space-y-8 text-[15px] leading-relaxed text-ink/70">
          <Section title="Using this site">
            By accessing the {siteConfig.company.name} website you agree to these terms. The content is provided for
            general information about the club and is subject to change without notice.
          </Section>
          <Section title="Bookings & memberships">
            Court bookings, lessons and memberships are subject to availability and to the club's separate booking and
            membership rules, which are provided at the point of purchase. Prices may change; the price shown at the
            time of booking applies.
          </Section>
          <Section title="Cancellations">
            Cancellation windows for courts, lessons and memberships are set out in your booking confirmation. Please
            give us as much notice as possible so the court can be offered to another member.
          </Section>
          <Section title="Conduct on court">
            All players are expected to follow club etiquette, wear appropriate non-marking footwear and respect staff,
            coaches and fellow members. We reserve the right to refuse service for unsafe or abusive behaviour.
          </Section>
          <Section title="Liability">
            Squash is a physical sport played at your own risk. To the fullest extent permitted by law, the club is not
            liable for injury or loss except where caused by our negligence.
          </Section>
          <Section title="Contact">
            Questions about these terms? Email{" "}
            <a href={`mailto:${siteConfig.company.email}`} className="text-primary hover:underline">
              {siteConfig.company.email}
            </a>
            .
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
