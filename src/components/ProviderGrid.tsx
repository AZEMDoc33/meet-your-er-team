"use client";
import { motion } from "framer-motion";
import ProviderCard from "./ProviderCard";
import type { Provider } from "@/data/providers";

export default function ProviderGrid({ providers }: { providers: Provider[] }) {
  return (
    <motion.div
      className="grid grid-cols-2 min-[680px]:grid-cols-3 min-[980px]:grid-cols-4 gap-5"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.08 }}
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      {providers.map((p) => (
        <ProviderCard key={p.slug} provider={p} />
      ))}
    </motion.div>
  );
}
