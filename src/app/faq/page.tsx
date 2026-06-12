import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FAQFilter from "@/components/FAQFilter";

export const metadata: Metadata = {
  title: "Common Questions",
  description: "Honest answers about emergency department wait times, triage, what to bring, the visit itself, discharge, admission, and billing at Banner Gateway.",
};

export default function FAQ() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">FAQ</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Common questions</h1>
          <p className="lede mt-4">Honest answers to the questions we hear most often. Tap a category to narrow the list.</p>
        </Reveal>
      </section>
      <section className="pb-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <FAQFilter />
          <div className="callout mt-10">
            These answers are general information about how our emergency department works. They are not medical
            advice. Always ask your care team about your specific situation.
          </div>
        </div>
      </section>
    </>
  );
}
