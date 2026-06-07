"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

/**
 * PageTransition — wraps <Routes> children with AnimatePresence for
 * smooth route transitions instead of jump-cut.
 *
 * Three preset transition styles:
 * - "fade" — simple cross-fade (most universal, V1 Heritage default)
 * - "slide" — slight upward translate with fade (V2 Editorial)
 * - "blur" — soft blur transition (premium, hospitality)
 *
 * Usage in App.tsx:
 *
 *   import PageTransition from "@/transitions/PageTransition";
 *
 *   <BrowserRouter>
 *     <Header />
 *     <PageTransition style="fade">
 *       <Routes>...</Routes>
 *     </PageTransition>
 *     <Footer />
 *   </BrowserRouter>
 *
 * Implements rule 33.3 — page transitions on route changes.
 */

type Style = "fade" | "slide" | "blur";

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] as const },
  },
  slide: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function PageTransition({
  children,
  style = "fade",
}: {
  children: ReactNode;
  style?: Style;
}) {
  const pathname = usePathname();
  const v = variants[style];
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={v.transition}
        // min-height keeps the layout from collapsing during exit
        style={{ minHeight: "60vh" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
