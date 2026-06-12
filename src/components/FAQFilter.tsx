"use client";
import { useMemo, useState } from "react";
import Accordion from "@/components/Accordion";
import { faqCategories, faqs, type FAQCategory } from "@/data/faqs";

type ActiveCategory = "all" | FAQCategory;

export default function FAQFilter() {
  const [active, setActive] = useState<ActiveCategory>("all");
  const visibleFaqs = useMemo(
    () => (active === "all" ? faqs : faqs.filter((faq) => faq.category === active)),
    [active]
  );

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 mb-8" aria-label="Filter frequently asked questions">
        {faqCategories.map((category) => {
          const isActive = active === category.id;
          const count = category.id === "all" ? faqs.length : faqs.filter((faq) => faq.category === category.id).length;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActive(category.id)}
              aria-pressed={isActive}
              className={`text-left rounded-card border-[1.5px] px-4 py-3.5 min-h-[112px] transition-all ${
                isActive
                  ? "bg-saguaro text-white border-saguaro shadow-lift"
                  : "bg-white text-ink border-sand-deep shadow-card hover:-translate-y-0.5 hover:shadow-lift"
              }`}
            >
              <span className={`block text-[12px] font-semibold tracking-[.12em] uppercase ${isActive ? "text-copper-soft" : "text-copper"}`}>
                {count} question{count === 1 ? "" : "s"}
              </span>
              <span className="block font-display text-[19px] leading-tight mt-2">{category.label}</span>
              <span className={`block text-[14px] leading-snug mt-2 ${isActive ? "text-canvas/82" : "text-ink-soft"}`}>
                {category.description}
              </span>
            </button>
          );
        })}
      </div>

      <Accordion key={active} items={visibleFaqs} />
    </>
  );
}
