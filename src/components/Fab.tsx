"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Fab() {
  const pathname = usePathname();
  if (pathname === "/feedback") return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed right-4 bottom-4 z-[80]"
    >
      <Link
        href="/feedback"
        aria-label="Share feedback"
        className="inline-flex items-center gap-2 bg-saguaro text-white no-underline rounded-full px-5 py-3.5 min-h-[52px] font-semibold text-[15px] shadow-lift hover:bg-saguaro-deep hover:-translate-y-0.5 transition-all"
      >
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-copper-soft" aria-hidden>
          <path d="M12 21s-7.5-4.9-10-9.3C.4 8.7 2.4 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.6 0 5.6 3.7 4 6.7C19.5 16.1 12 21 12 21z" />
        </svg>
        Feedback
      </Link>
    </motion.div>
  );
}
