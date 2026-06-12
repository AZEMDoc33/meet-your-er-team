import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?hl=en-US&gl=us&q=Banner+Gateway+Medical+Center+%7C+Gilbert,+AZ+%7C+Higley+Rd.,+1900+N+Higley+Rd,+Gilbert,+AZ+85234&ludocid=6980348998412388276&lsig=AB86z5XVdUkvU8QS8QOe6ADVr52j#lrd=0x872baf02259bddaf:0x60df2e6e3a9fc7b4,3";

export const metadata: Metadata = {
  title: "Patient Feedback",
  description: "How patient experience surveys help Banner Gateway Emergency Department improve care.",
};

export default function Feedback() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap text-center">
          <span className="eyebrow">Feedback</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">We want to hear from you</h1>
          <p className="lede mt-4 mx-auto max-w-[760px]">
            After your ED visit, you may receive a Press Ganey patient experience survey. Filling it out honestly
            helps us understand what went well and where we can improve. A few minutes of your time helps us move
            toward our goal of being the best emergency department in our community and Arizona.
          </p>
        </Reveal>
      </section>
      <section className="bg-sand py-11">
        <div className="wrap text-center">
          <span className="eyebrow">What patients are saying</span>
          <Testimonials compact />
          <Reveal className="mt-11">
            <p className="text-ink-soft max-w-[620px] mx-auto">
              If you would like to leave feedback right now, you can share a public Google review.
            </p>
            <p className="mt-5">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="google-review-btn"
              >
                <span className="review-spark review-spark-one" aria-hidden>&#9733;</span>
                <span className="review-spark review-spark-two" aria-hidden>&#10022;</span>
                <span className="review-spark review-spark-three" aria-hidden>&#9733;</span>
                <span className="review-spark review-spark-four" aria-hidden>&#10022;</span>
                <span className="google-mark" aria-hidden>G</span>
                <span>Leave a Google Review</span>
              </a>
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-[clamp(48px,7vw,72px)]">
        <div className="wrap">
          <div className="callout mx-auto">
            <strong>Please do not send medical details through this website.</strong> This site is not monitored by
            your care team and cannot be used for medical advice. If you need help right now, use your call button,
            speak with any staff member, call 911, or return to the emergency department.
          </div>
        </div>
      </section>
    </>
  );
}
