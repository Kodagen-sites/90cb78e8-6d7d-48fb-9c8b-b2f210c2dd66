"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText from "@/components/motion/HeroScrollText";
import { heroFrames } from "@/lib/assets";
import { siteConfig } from "@/content/site-config";

/**
 * Scrub-cinematic home hero (Archetype G / Mode 2). The Veo squash-court clip
 * is extracted to a frame sequence and scrubbed by scroll via <ScrollCanvas>.
 * Live scroll `progress` is piped into <HeroScrollText> so the headline moves
 * through three chapters as the visitor scrolls — never a single static <h1>.
 */
export default function HomeHero() {
  const [p, setP] = useState(0);
  const { frameCount, pattern } = heroFrames();
  const count = frameCount || 192;

  return (
    <ScrollCanvas
      frameCount={count}
      pattern={pattern}
      padLength={4}
      scrollDistance={siteConfig.scrollHero.scrollDistance}
      onProgress={setP}
      loadingVariant="L3"
      loadingLabel={siteConfig.company.name}
    >
      <HeroScrollText
        progress={p}
        position="bottom-left"
        textColor="#FAF6EE"
        accentColor="#FAF6EE"
        accentTextColor="#0E1C33"
        chapters={[
          {
            at: 0,
            eyebrow: siteConfig.company.tagline,
            headlineLines: ["The court is", "always open"],
            subline:
              "Eight glass-back courts in the heart of Amsterdam — for first-timers and county champions alike.",
            cta: { label: siteConfig.cta.primary, href: "/contact" },
          },
          {
            at: 0.4,
            eyebrow: "Eight pro courts",
            headlineLines: ["No waiting,", "just play"],
            subline:
              "Smart booking and eight show courts mean a court when you want one — not whenever one frees up.",
          },
          {
            at: 0.75,
            eyebrow: "Coaching & community",
            headlineLines: ["Find", "your level"],
            subline:
              "Friendly PSA coaches, box leagues and a warm clubhouse. Come for the squash, stay for the people.",
            cta: { label: "Explore the club", href: "/services" },
          },
        ]}
      />
    </ScrollCanvas>
  );
}
