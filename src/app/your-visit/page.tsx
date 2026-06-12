import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PhotoBand from "@/components/PhotoBand";

export const metadata: Metadata = {
  title: "Your Visit, Step by Step",
  description: "What happens during your emergency department visit at Banner Gateway, from arrival and triage to results and your care plan.",
};

const STEPS = [
  { t: "1. Arrival & check in", d: "Give the front desk your name and the reason for your visit. You do not need insurance information to be seen — federal law guarantees everyone a medical screening exam. Tell staff immediately if your symptoms worsen at any point." },
  { t: "2. Triage", d: "A specially trained nurse measures your vital signs and asks about your symptoms. This determines how urgently you need to be seen. This is why arrival order and treatment order are not the same thing." },
  { t: "3. Evaluation", d: "A physician or physician assistant examines you, asks detailed questions, and decides which tests will answer the most important question: is something dangerous happening? You may have blood drawn, an IV placed, or imaging ordered." },
  { t: "4. Results & reassessment", d: "This is usually the longest part of your visit. Most lab tests take 1 to 2 hours to process. When a CT scan is needed, it can add 3 to 4 hours to the overall emergency department visit because the scan must be performed, processed, and read by a radiologist. While you wait, the team is monitoring you and reviewing results as they arrive. Quiet does not mean forgotten." },
  { t: "5. Your plan", d: "Your provider explains what we found and what it means. Most patients go home with instructions and follow up plans. Some need to stay for observation or admission. Either way, you should leave this conversation knowing your diagnosis, your next steps, and the warning signs that should bring you back." },
];

export default function YourVisit() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">What to expect</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Your visit, step by step</h1>
          <p className="lede mt-4">Every emergency visit follows the same basic journey. Here is what happens at each stage, and why.</p>
        </Reveal>
      </section>
      <section className="pb-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <div className="relative">
            <span aria-hidden className="absolute left-[11px] top-3.5 bottom-3.5 w-[2px] bg-sand-deep" />
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.06} className="relative pl-11 pb-9 last:pb-0">
                <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-canvas border-2 border-copper flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-copper" />
                </span>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mb-1.5">{s.t}</h3>
                <p className="text-ink-soft max-w-[62ch]">{s.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <div className="callout">
              <strong>One honest note about waiting:</strong> we know it is the hardest part. Wait times rise and
              fall with how many critically ill patients arrive, often by ambulance and unseen from the waiting
              room. If anything changes with how you feel, tell us right away.
            </div>
          </Reveal>
        </div>
      </section>
      <PhotoBand
        src="/images/band-peds.jpg"
        alt="A young child resting in a hospital bed while receiving a breathing treatment"
        quote="We care for your family like our own."
        cite="Pediatric care at Banner Gateway"
      />
    </>
  );
}
