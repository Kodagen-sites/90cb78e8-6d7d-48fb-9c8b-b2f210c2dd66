// lib/assets.ts — single accessor for platform-generated assets.
//
// The PLATFORM owns content/asset-manifest.json (resolved Unsplash/Gemini
// image URLs keyed by slot, plus scene videos) and content/frames-manifest.json
// (the scroll-scrub frame sequence). This module reads both and ALWAYS returns
// a usable value: if a slot hasn't resolved yet, it falls back to a brand
// gradient so the site never ships a broken-image icon.

import manifest from "@/content/asset-manifest.json";
import frames from "@/content/frames-manifest.json";
import { resolveImage } from "@/lib/image-fallback";
import { siteConfig } from "@/content/site-config";

type Manifest = {
  images?: Record<string, string>;
  videos?: Record<string, string>;
  frames?: Record<string, unknown>;
};

const m = manifest as Manifest;

/** Resolved image URL for a slot, or a brand-gradient fallback. */
export function assetImage(slot: string, keyword?: string): string {
  const url = m.images?.[slot];
  if (url && url.length > 4) return url;
  return resolveImage({
    industry: "squash-club",
    keyword: keyword || slot.replace(/[-_]/g, " "),
    brandColor: siteConfig.brand.primary,
  });
}

/** Hero scene poster (first frame image) — used as a static fallback. */
export function heroPoster(): string {
  return m.images?.["scene-1-start"] || assetImage("section-services-hero", "squash court");
}

/** Hero scene video URL (the stitched Veo clip), if present. */
export function heroVideo(): string | null {
  return m.videos?.["scene-1"] || null;
}

type Frames = {
  frameCount?: number;
  frameUrlTemplate?: string;
  frameDir?: string;
};

/**
 * Scroll-scrub frame source for the cinematic home hero.
 * `pattern` is the ScrollCanvas URL template ({NNNN} → padded index).
 * `frameCount` is how many frames to scrub.
 */
export function heroFrames(): { frameCount: number; pattern: string } {
  const f = frames as Frames;
  const pattern =
    f.frameUrlTemplate ||
    (f.frameDir ? `${f.frameDir}/frame-{NNNN}.jpg` : "/frames/frame-{NNNN}.jpg");
  return {
    frameCount: typeof f.frameCount === "number" && f.frameCount > 0 ? f.frameCount : 0,
    pattern,
  };
}
