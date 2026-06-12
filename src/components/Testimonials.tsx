"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials({ compact = false }: { compact?: boolean }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  const next = useCallback(() => setIdx((i) => (i + 1) % testimonials.length), []);

  useEffect(() => {
    if (paused || reduced || testimonials.length < 2) return;
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [paused, reduced, next]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={`relative mx-auto max-w-[760px] ${compact ? "min-h-[150px]" : "min-h-[190px] sm:min-h-[160px]"}`}>
        <AnimatePresence mode="wait">
          <motion.figure
            key={idx}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-start justify-center text-center"
          >
            <blockquote
              className={`font-display italic font-medium leading-[1.5] text-ink ${
                compact ? "text-[clamp(17px,2.6vw,21px)]" : "text-[clamp(19px,3.2vw,26px)]"
              }`}
            >
              <span className="text-copper">&ldquo;</span>
              {testimonials[idx]}
              <span className="text-copper">&rdquo;</span>
            </blockquote>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="flex gap-2.5 justify-center mt-6" role="tablist" aria-label="Patient comments">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Show comment ${i + 1} of ${testimonials.length}`}
            aria-current={i === idx}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === idx ? "bg-copper scale-[1.3]" : "bg-sand-deep hover:bg-copper-soft"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
