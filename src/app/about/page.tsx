import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PhotoBand from "@/components/PhotoBand";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are, how emergency medicine works, and our commitments to every patient at Banner Gateway Medical Center.",
};

const COMMITMENTS = [
  { t: "Communication", d: "You deserve to know what we are thinking, what we are testing for, and what comes next. If you ever feel unsure, ask. We mean it." },
  { t: "Teamwork", d: "Physicians, PAs, nurses, technicians, and specialists working together on your care, with your physician leading the plan." },
  { t: "Safety", d: "Evidence based care, careful medication practices, and a culture where any team member can speak up about your safety." },
  { t: "Respect", d: "You will be heard. Your pain, your worry, and your questions are taken seriously here, every visit, every time." },
];

export default function About() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(40px,6vw,64px)]">
        <Reveal className="wrap">
          <span className="eyebrow">About us</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Who we are</h1>
          <p className="lede mt-4">
            We are the emergency physicians and physician assistants of Banner Gateway Medical Center in Gilbert,
            Arizona. We live in this community, and we care for it 24 hours a day.
          </p>
        </Reveal>
      </section>
      <section className="bg-sand py-[clamp(56px,9vw,104px)]">
        <Reveal className="wrap">
          <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">How emergency medicine works</h2>
          <p className="mt-4 max-w-[680px]">
            Emergency medicine is the specialty trained to care for anyone, with anything, at any time. Our
            physicians complete residency training specifically in recognizing and treating life threatening
            conditions, and in sorting the serious from the safe when symptoms could be either.
          </p>
          <p className="mt-3.5 max-w-[680px]">
            When you visit, our first job is to answer one question: is something dangerous happening? That is why
            your visit may include tests, monitoring, and periods of waiting while results process. Everything we
            do is aimed at making sure you leave with the right diagnosis and the right plan.
          </p>
        </Reveal>
      </section>
      <section className="py-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Our commitments to you</h2>
          </Reveal>
          <div className="grid gap-5 min-[680px]:grid-cols-2 mt-8">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="bg-white rounded-card shadow-card p-7 h-full">
                  <h3 className="font-display text-[20px]">{c.t}</h3>
                  <p className="text-ink-soft text-[16px] mt-2">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <PhotoBand
        src="/images/band-rest.jpg"
        alt="A resting patient's hand with an IV line, tucked under a warm blanket"
        quote="Healing starts with feeling safe."
        cite="Banner Gateway Emergency Department"
      />
    </>
  );
}
