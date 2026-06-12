"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="grid gap-3 max-w-[760px]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white rounded-xl shadow-card overflow-hidden">
            <button
              className="w-full flex justify-between items-center gap-4 text-left px-5 py-[18px] min-h-[56px] font-display font-medium text-[18px] text-ink"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              {item.q}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? "#B5722F" : "#EDE5D8" }}
                transition={{ duration: 0.3 }}
                className="flex-none w-[26px] h-[26px] rounded-full flex items-center justify-center"
              >
                <svg viewBox="0 0 16 16" className="w-3 h-3" fill="none" strokeWidth={2.5} stroke={isOpen ? "#fff" : "#3E5C50"}>
                  <path d="M3 6l5 5 5-5" />
                </svg>
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`acc-panel-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-ink-soft text-[16.5px]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
