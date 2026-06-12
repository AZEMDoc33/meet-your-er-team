"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import type { Provider } from "@/data/providers";

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Link
        href={`/team/${provider.slug}`}
        className="group flex flex-col h-full bg-white rounded-card overflow-hidden shadow-card hover:shadow-lift transition-shadow no-underline text-ink"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          {provider.photo ? (
            <Image
              src={provider.photo}
              alt={`Portrait of ${provider.name}`}
              fill
              sizes="(max-width: 680px) 50vw, (max-width: 980px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          ) : (
            <Avatar provider={provider} className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
          )}
        </div>
        <div className="p-4 pb-[18px]">
          <strong className="block font-display font-semibold text-[17.5px] leading-tight">{provider.name}</strong>
          <span className="block text-[13.5px] text-ink-soft mt-1">{provider.role}</span>
          {provider.quote && (
            <em className="block font-display italic text-[14.5px] text-saguaro mt-2.5 leading-snug">
              &ldquo;{provider.quote}&rdquo;
            </em>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
