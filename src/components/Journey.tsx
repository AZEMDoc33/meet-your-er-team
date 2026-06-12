"use client";
import { motion } from "framer-motion";

const STEPS = [
  { t: "Arrival", d: "Check in at the front desk. Tell us right away if your symptoms change." },
  { t: "Triage", d: "A nurse checks your vital signs and symptoms to determine how urgently you need care." },
  { t: "Evaluation", d: "A physician or PA examines you and orders any tests you need." },
  { t: "Results", d: "Labs and imaging take time to process. Waiting often means tests are working, not that you are forgotten." },
  { t: "Your plan", d: "We explain what we found and what comes next, whether that is going home or staying with us." },
];

export default function Journey() {
  return (
    <motion.div
      className="relative mt-10 grid gap-0 min-[880px]:grid-cols-5 min-[880px]:gap-7"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ show: { transition: { staggerChildren: 0.18 } } }}
    >
      {/* connector line: vertical on mobile, horizontal on desktop */}
      <motion.span
        aria-hidden
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute left-[11px] top-3.5 bottom-3.5 w-[2px] bg-copper/40 origin-top min-[880px]:hidden"
      />
      <motion.span
        aria-hidden
        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute hidden min-[880px]:block left-3 right-3 top-[15px] h-[2px] bg-copper/40 origin-left"
      />
      {STEPS.map((s) => (
        <motion.div
          key={s.t}
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative pl-11 pb-8 last:pb-0 min-[880px]:pl-0 min-[880px]:pt-[52px] min-[880px]:pb-0"
        >
          <span className="absolute left-0 top-1 min-[880px]:left-0 min-[880px]:top-0 w-6 h-6 rounded-full bg-canvas border-2 border-copper flex items-center justify-center">
            <motion.span
              variants={{ hidden: { scale: 0 }, show: { scale: 1 } }}
              transition={{ type: "spring", stiffness: 400, damping: 16 }}
              className="w-2 h-2 rounded-full bg-copper"
            />
          </span>
          <h3 className="font-display text-[clamp(21px,3vw,25px)] mb-1.5">{s.t}</h3>
          <p className="text-ink-soft max-w-[56ch]">{s.d}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
