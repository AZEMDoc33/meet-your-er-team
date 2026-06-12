import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Patient Feedback",
  description: "How patient experience surveys help Banner Gateway Emergency Department improve care.",
};

export default function Feedback() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Feedback</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">We want to hear from you</h1>
          <p className="lede mt-4">
            Your feedback helps us improve emergency care for every patient and family who comes through our doors.
          </p>
        </Reveal>
      </section>
      <section className="bg-sand py-11">
        <div className="wrap text-center">
          <span className="eyebrow">What patients are saying</span>
          <Testimonials compact />
        </div>
      </section>
      <section className="py-[clamp(48px,7vw,72px)]">
        <div className="wrap">
          <Reveal>
            <div className="max-w-[760px] bg-white rounded-card shadow-card p-7 sm:p-9">
              <h2 className="font-display text-[clamp(25px,4vw,34px)]">Please complete your patient experience survey</h2>
              <p className="mt-4 text-ink-soft">
                We appreciate all feedback, both positive and negative. We are working every day to make our
                department better for our patients, families, and community.
              </p>
              <p className="mt-3.5 text-ink-soft">
                After your visit, you may receive a Press Ganey patient experience survey. Filling it out honestly
                helps us understand what went well and where we need to improve.
              </p>
              <p className="mt-3.5 text-ink-soft">
                A few minutes of your time helps us move toward our goal of being the best emergency department in
                our community.
              </p>
            </div>
          </Reveal>
          <div className="callout mt-9">
            <strong>Please do not send medical details through this website.</strong> This site is not monitored by
            your care team and cannot be used for medical advice. If you need help right now, use your call button,
            speak with any staff member, call 911, or return to the emergency department.
          </div>
        </div>
      </section>
    </>
  );
}
