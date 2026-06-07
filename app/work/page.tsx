import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { assetImage } from "@/lib/assets";
import PageHero from "@/components/PageHero";
import SEOHead, { buildMetadata } from "@/components/seo/SEOHead";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import { CtaBlock } from "@/app/page";
import { breadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = buildMetadata({
  title: `Club life — ${siteConfig.company.name}`,
  description:
    "Leagues, junior squads, finals nights and friendly games — a look at life on and around the courts at " +
    siteConfig.company.name + ".",
  path: "/work",
});

const moments = [
  {
    slot: "gallery-1",
    keyword: "squash racquet and ball closeup",
    tag: "On court",
    title: "Box leagues, every month",
    body: "Players of every standard matched fairly and competitively. The ladder keeps moving — so do you.",
  },
  {
    slot: "gallery-2",
    keyword: "squash players shaking hands court",
    tag: "Community",
    title: "Finals night under the lights",
    body: "A full gallery, a cold drink, and the best squash of the season. The night the whole club turns up.",
  },
  {
    slot: "gallery-3",
    keyword: "squash court from above overhead",
    tag: "Academy",
    title: "Juniors who keep coming back",
    body: "From first-swing fundamentals to county squads — fun first, fundamentals always, ages 6 to 18.",
  },
  {
    slot: "gallery-4",
    keyword: "athlete tying shoes sports locker",
    tag: "Coaching",
    title: "A game you'll actually enjoy",
    body: "PSA-qualified coaches who meet you at your level and build from there. Beginners genuinely welcome.",
  },
];

export default function WorkPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: siteConfig.seo.siteUrl + "/" },
    { name: "Club life", url: siteConfig.seo.siteUrl + "/work" },
  ]);

  return (
    <>
      <SEOHead jsonLd={jsonLd} />
      <PageHero
        eyebrow="Club life"
        title="Life on the courts"
        image={assetImage("section-cta", "squash player action silhouette")}
        intro="Leagues, junior squads, finals nights and friendly games — this is what a week at the club actually looks like."
      />

      <section className="section-pad">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {moments.map((m, i) => (
              <article
                key={m.slot}
                className={`group overflow-hidden rounded-2xl border border-ink/10 bg-surface/30 ${
                  i % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${i % 3 === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}>
                  <img
                    src={assetImage(m.slot, m.keyword)}
                    alt={m.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-contrast/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                    {m.tag}
                  </span>
                </div>
                <div className="p-7">
                  <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink md:text-2xl">
                    {m.title}
                  </h2>
                  <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink/65">
                    {m.body}
                  </p>
                </div>
              </article>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Pull stat row */}
      <section className="bg-contrast text-cream">
        <div className="mx-auto max-w-[1280px] px-5 py-16 md:px-10 md:py-20">
          <FadeUp>
            <p className="mx-auto max-w-[24ch] text-center font-display text-[clamp(26px,4vw,48px)] font-light leading-[1.1] tracking-[-0.02em]">
              {siteConfig.mixedMedia.accentLine}
            </p>
          </FadeUp>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
