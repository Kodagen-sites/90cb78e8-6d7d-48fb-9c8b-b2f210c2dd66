"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { NAV_LINKS } from "./nav-links";
import { useScrollState } from "./hooks";

/**
 * Amsterdam Squash Club header — light theme.
 * Transparent (cream text) over the dark cinematic hero; condenses into a
 * solid cream bar with navy ink + soft shadow once the visitor scrolls.
 */
export default function Header() {
  const scrolled = useScrollState(40);
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const onLight = scrolled; // solid cream bar → navy ink
  const ink = onLight ? "text-ink" : "text-cream";
  const muted = onLight ? "text-ink/65" : "text-cream/75";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          onLight
            ? "bg-bg/90 backdrop-blur-xl border-b border-ink/10 shadow-[0_8px_30px_-12px_rgba(14,28,51,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            className={`flex items-center gap-2.5 font-display text-sm font-semibold uppercase tracking-[0.16em] ${ink}`}
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold"
              style={{ background: "var(--primary-color)", color: "#FAF6EE" }}
            >
              {siteConfig.company.name[0]}
            </span>
            <span className="hidden sm:inline">{siteConfig.company.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.slice(1).map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                    active ? ink : muted
                  } hover:${onLight ? "text-ink" : "text-cream"}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`ml-2 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold transition-all ${
                onLight
                  ? "bg-primary text-cream hover:brightness-110"
                  : "bg-cream text-ink hover:bg-white"
              }`}
            >
              {siteConfig.cta.primary}
              <ArrowRight size={14} />
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`md:hidden ${ink}`}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-contrast text-cream md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.16em]">
                {siteConfig.company.name}
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-6 pt-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-3xl font-light hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-base font-semibold text-ink"
                >
                  {siteConfig.cta.primary}
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
