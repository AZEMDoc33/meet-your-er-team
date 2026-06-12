"use client";
/* The copper journey line, site-wide: a thin scroll progress bar
   echoing the visit journey motif. */
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] bg-copper origin-left z-[120]"
      style={{ scaleX }}
    />
  );
}
