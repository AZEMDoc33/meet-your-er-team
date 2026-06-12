import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Patient Resources",
  description: "Patient resources for Banner Gateway ED visits: wait times, discharge and follow up care, medical records, and billing.",
};

const RESOURCES = [
  { href: "/your-visit", t: "What happens during your visit", d: "The 5 stages of emergency care, explained.", cta: "Read" },
  { href: "/faq", t: "Understanding wait times", d: "Why emergency departments work the way they do, and what your wait actually means.", cta: "Read" },
  { href: "/faq", t: "After your visit", d: "Discharge instructions, follow up care, and the warning signs that should bring you back.", cta: "Read" },
  { href: "https://www.bannerhealth.com/patients/medical-records", t: "Medical records", d: "Request copies of your visit records through Banner Health.", cta: "Visit Banner Health" },
  { href: "https://www.bannerhealth.com/patients/billing", t: "Billing questions", d: "Understand your hospital and physician bills and who to contact.", cta: "Visit Banner Health" },
  { href: "/contact", t: "Hospital services & directions", d: "Location, parking, and contact information for Banner Gateway Medical Center.", cta: "Read" },
];

export default function Resources() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Patient resources</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Helpful information</h1>
          <p className="lede mt-4">Guides for during your visit and after you go home.</p>
        </Reveal>
      </section>
      <section className="pb-[clamp(56px,9vw,104px)]">
        <div className="wrap grid gap-5 min-[680px]:grid-cols-2">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <Link href={r.href} rel={r.href.startsWith("http") ? "noopener" : undefined}
                className="flex flex-col gap-2 h-full bg-white rounded-card shadow-card hover:shadow-lift hover:-translate-y-1 transition-all p-7 no-underline text-ink">
                <h3 className="font-display text-[20px]">{r.t}</h3>
                <p className="text-ink-soft text-[16px]">{r.d}</p>
                <span className="mt-auto pt-3 font-semibold text-copper text-[14.5px]">{r.cta} &rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
