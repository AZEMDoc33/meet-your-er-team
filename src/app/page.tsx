import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ProviderGrid from "@/components/ProviderGrid";
import PhotoBand from "@/components/PhotoBand";
import Journey from "@/components/Journey";
import Accordion from "@/components/Accordion";
import Testimonials from "@/components/Testimonials";
import { providers } from "@/data/providers";
import { faqs } from "@/data/faqs";

export default function Home() {
  const preview = [...providers]
    .sort((a, b) => (b.photo ? 1 : 0) - (a.photo ? 1 : 0))
    .slice(0, 4);

  return (
    <>
      <Hero />

      <section id="welcome" className="py-[clamp(56px,9vw,104px)]">
        <Reveal className="wrap text-center">
          <span className="eyebrow">You&apos;re in good hands</span>
          <h2 className="font-display text-[clamp(27px,4.5vw,40px)] leading-[1.18]">
            Nobody plans to be here.
            <br />
            We plan for you to be.
          </h2>
          <p className="lede mx-auto mt-[18px]">
            An emergency visit can feel overwhelming. Our physicians, physician assistants, and nurses are here
            around the clock, and we believe you deserve to understand what is happening at every step. This site
            exists to answer your questions, introduce the people caring for you, and make your visit a little
            less stressful.
          </p>
        </Reveal>
      </section>

      <section className="bg-sand py-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The people behind the scrubs</span>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Meet your care team</h2>
            <p className="lede mt-3.5">
              Board certified emergency physicians and experienced physician assistants, available 24 hours a day,
              every day of the year.
            </p>
          </Reveal>
          <div className="mt-9">
            <ProviderGrid providers={preview} />
          </div>
          <p className="mt-8">
            <Link className="text-link" href="/team">
              Meet all of our providers &rarr;
            </Link>
          </p>
        </div>
      </section>

      <PhotoBand
        src="/images/band-hands.jpg"
        alt="A nurse gently holding a patient's hand at the bedside"
        quote="You will never be just a room number to us."
        cite="Our promise to every patient"
      />

      <section className="py-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">What to expect</span>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Your visit, step by step</h2>
            <p className="lede mt-3.5">
              Emergency care follows a process. Knowing where you are in it makes the waiting easier.
            </p>
          </Reveal>
          <Journey />
          <p className="mt-9">
            <Link className="btn-ghost" href="/your-visit">
              See the full guide
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-sand py-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <Reveal className="text-center">
            <span className="eyebrow">Good questions</span>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Answers while you wait</h2>
          </Reveal>
          <div className="mt-9 flex justify-center">
            <Accordion items={faqs.slice(0, 3)} />
          </div>
          <p className="mt-7 text-center">
            <Link className="text-link" href="/faq">
              All common questions &rarr;
            </Link>
          </p>
        </div>
      </section>

      <PhotoBand
        src="/images/band-arrival.jpg"
        alt="The open rear doors of an ambulance"
        quote="Anyone. Anything. Anytime."
        cite="Emergency medicine, 24 hours a day"
      />

      <section className="py-[clamp(56px,9vw,104px)]">
        <Reveal className="wrap text-center">
          <div className="w-11 h-11 mx-auto rounded-full bg-copper text-white font-display text-[26px] leading-none flex items-center justify-center" aria-hidden>
            &rdquo;
          </div>
          <span className="eyebrow mt-4">In their words</span>
          <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Kind words from our patients</h2>
          <div className="mt-7">
            <Testimonials />
          </div>
          <p className="mt-5 text-[13px] tracking-[.1em] uppercase text-ink-soft">From recent patient experience surveys</p>
        </Reveal>
      </section>

      <section className="bg-sand py-[clamp(56px,9vw,104px)]">
        <Reveal className="wrap text-center">
          <span className="eyebrow">We want to hear from you</span>
          <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">How was your experience?</h2>
          <p className="lede mx-auto mt-4">
            Your patient experience survey helps us understand what went well and where we need to improve.
            Honest feedback helps us make care better for the next patient.
          </p>
          <p className="mt-7">
            <Link className="btn-primary" href="/feedback">
              Learn about feedback
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
