import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Share Feedback",
  description: "Recognize a physician, nurse, or team member, or share a concern with Banner Gateway ED leadership.",
};

export default function Feedback() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Feedback</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">We want to hear from you</h1>
          <p className="lede mt-4">
            Recognize someone who made a difference, or tell us how we can do better. Messages go directly to
            department leadership.
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
          <Suspense>
            <FeedbackForm />
          </Suspense>
          <div className="callout mt-9">
            <strong>Please do not include medical details or questions about your care.</strong> This form is not
            monitored by your care team and cannot be used for medical advice. If you need help right now, use
            your call button or speak with any staff member. For formal complaints, you may also contact Banner
            Gateway patient relations through the main hospital line.
          </div>
        </div>
      </section>
    </>
  );
}
