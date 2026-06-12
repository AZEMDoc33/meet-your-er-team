"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STAGES = ["ARRIVAL", "TRIAGE", "EVALUATION", "RESULTS", "YOUR PLAN"];
const TITLE = ["Banner", "Gateway", "Emergency", "Department"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-end bg-ink overflow-hidden
                 min-h-[78svh] sm:min-h-[84svh]
                 md:min-h-0 md:aspect-[16/9]"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: yImg }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/photos/hero-background.png"
          alt="A physician examining a young patient — compassionate care at Banner Gateway Emergency Department"
          fill
          priority
          className="object-cover object-[58%_center] sm:object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/35 to-[#18221f]/90 md:from-ink/35 md:via-ink/10 md:to-[#212D29]/85" />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-[2] w-full max-w-site mx-auto px-5 sm:px-8 lg:px-10 pb-[clamp(56px,10vh,96px)]"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-display italic text-copper-soft text-[clamp(17px,2.6vw,21px)] tracking-wide mb-3.5"
        >
          Anyone. Anything. Anytime.
        </motion.p>

        <h1 className="font-display font-medium text-canvas text-[clamp(34px,7vw,58px)] leading-[1.14] max-w-[13ch]">
          {TITLE.map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.09, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="text-canvas/90 text-[clamp(17px,2.4vw,21px)] max-w-[46ch] mt-4"
        >
          Providing expert emergency care with compassion, communication, and teamwork.
        </motion.p>

        {/* Clinical blog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-6"
        >
          <a
            href="https://myervisit.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       border border-copper-soft/60 text-copper-soft
                       text-[13.5px] tracking-[.08em] uppercase font-sans
                       hover:bg-copper-soft/10 transition-colors duration-200
                       no-underline"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Clinical Blog by Dr. Cummins
          </a>
        </motion.div>

        {/* Visit journey line */}
        <div className="mt-9 w-full max-w-[720px]" aria-hidden>
          <div className="relative h-3">
            <span className="absolute left-[10%] right-[10%] top-1/2 h-[2px] -translate-y-1/2 bg-canvas/25 rounded" />
            <motion.span
              className="absolute left-[10%] right-[10%] top-1/2 h-[2px] -translate-y-1/2 origin-left bg-copper-soft rounded"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 1.1, ease: "easeOut" }}
            />
            <div className="relative z-[1] grid grid-cols-5 h-full items-center">
              {STAGES.map((stage, i) => (
                <motion.span
                  key={stage}
                  className="mx-auto w-2 h-2 rounded-full bg-copper-soft"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.35 + i * 0.22, type: "spring", stiffness: 400, damping: 18 }}
                />
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="mt-2.5 grid grid-cols-5 text-canvas/70 text-[8px] min-[380px]:text-[9px] sm:text-[11px] md:text-[12px] tracking-[.02em] sm:tracking-[.05em] md:tracking-[.08em]"
          >
            {STAGES.map((stage) => (
              <small key={stage} className="block text-center whitespace-nowrap">
                {stage}
              </small>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#welcome"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2] text-canvas/75 text-[12px] tracking-[.14em] uppercase no-underline flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        Scroll
        <motion.span
          className="w-px h-7 bg-gradient-to-b from-copper-soft to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.a>
    </section>
  );
}
