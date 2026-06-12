"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PhotoBand({
  src,
  alt,
  quote,
  cite,
}: {
  src: string;
  alt: string;
  quote: string;
  cite: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative min-h-[clamp(380px,55vh,520px)] flex items-center bg-ink overflow-hidden">
      <motion.div className="absolute inset-[-10%_0]" style={{ y }}>
        <Image src={src} alt={alt} fill className="object-cover opacity-85" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#212D29]/80 to-[#212D29]/25" />
      <div className="wrap relative z-[2] w-full py-16">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-canvas text-[clamp(23px,4vw,34px)] max-w-[21ch] leading-[1.35]"
        >
          <span className="text-copper-soft">&ldquo;</span>
          {quote}
          <span className="text-copper-soft">&rdquo;</span>
        </motion.blockquote>
        <motion.cite
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="block mt-4 not-italic text-[14px] tracking-[.1em] uppercase text-copper-soft"
        >
          {cite}
        </motion.cite>
      </div>
    </section>
  );
}
