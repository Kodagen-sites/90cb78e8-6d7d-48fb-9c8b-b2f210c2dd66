/**
 * ServiceCardVideoRotate — drops into any CV1–CV8 grid when a product has a
 * pre-rendered 360° rotating video (ghost mannequin, dish spin, etc.).
 *
 * Behaviour:
 *   - Default: shows the static thumbnail image
 *   - Hover (desktop) / In-viewport (mobile): seamlessly swaps to the looping video
 *   - Video is muted, autoplay, looped — no controls
 *   - If video fails to load: falls back to thumbnail image silently
 *   - prefers-reduced-motion: shows thumbnail only (never plays video)
 *
 * When to use:
 *   Scaffolder checks siteConfig.services[i].rotateVideoUrl — if present, use this
 *   component. Otherwise use the standard ServiceCard (image only).
 *
 * Grid: same classes as the CV variant in use. This component provides the
 *   image-area replacement only — caller wraps it in the CV's outer shell.
 */

"use client";

import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "framer-motion";

export interface ServiceCardVideoRotateProps {
  name: string;
  description: string;
  price?: string;
  /** Static thumbnail — shown before hover and as video fallback */
  imageSrc: string;
  /** Pre-rendered 360° rotate video from Veo — mp4 preferred, webm fallback */
  rotateVideoUrl: string;
  /** Optional second format (webm) for better browser coverage */
  rotateVideoUrlWebm?: string;
  className?: string;
}

export default function ServiceCardVideoRotate({
  name,
  description,
  price,
  imageSrc,
  rotateVideoUrl,
  rotateVideoUrlWebm,
  className = "",
}: ServiceCardVideoRotateProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const shouldReduce = useReducedMotion();

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    rootMargin: "0px",
  });

  const showVideo = !shouldReduce && !videoFailed && (hovered || inView);

  function handleMouseEnter() {
    setHovered(true);
    videoRef.current?.play().catch(() => setVideoFailed(true));
  }

  function handleMouseLeave() {
    setHovered(false);
  }

  return (
    <div
      ref={inViewRef}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-accent)]/40 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media area */}
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)]/20 via-white/5 to-[var(--color-accent)]/20">
        {/* Static thumbnail — always rendered, hidden when video is playing */}
        <img
          src={imageSrc}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            showVideo && videoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Rotating video — lazy-loaded, plays on hover */}
        {!shouldReduce && !videoFailed && (
          <video
            ref={videoRef}
            src={rotateVideoUrl}
            autoPlay={showVideo}
            loop
            muted
            playsInline
            preload="none"
            onCanPlayThrough={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              showVideo && videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            {rotateVideoUrlWebm && (
              <source src={rotateVideoUrlWebm} type="video/webm" />
            )}
          </video>
        )}

        {/* Subtle "360°" badge — only when video is playing */}
        {showVideo && videoReady && (
          <span className="absolute top-3 right-3 rounded-full bg-black/50 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/70">
            360°
          </span>
        )}
      </div>

      {/* Text */}
      <div className="p-5">
        <h3 className="font-display text-lg text-white mb-2 leading-snug">
          {name}
        </h3>
        <p className="text-white/60 text-sm leading-snug line-clamp-2">
          {description}
        </p>
        {price && (
          <p className="mt-3 text-sm font-semibold text-[var(--color-accent)]">
            {price}
          </p>
        )}
        <div className="mt-3 font-mono text-xs text-[var(--color-accent)]/80 group-hover:text-[var(--color-accent)] transition-colors">
          View →
        </div>
      </div>
    </div>
  );
}
