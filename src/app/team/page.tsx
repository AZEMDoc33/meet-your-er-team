import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProviderGrid from "@/components/ProviderGrid";
import { physicians, pas } from "@/data/providers";

export const metadata: Metadata = {
  title: "Our Providers",
  description: "Meet the board certified emergency physicians and physician assistants of Banner Gateway Medical Center in Gilbert, AZ.",
};

export default function Team() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Our providers</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">The people caring for you</h1>
          <p className="lede mt-4">
            Tap any card to learn more about your physician or physician assistant — their training, their
            interests, and what they want you to know.
          </p>
        </Reveal>
      </section>
      <section className="pb-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)]">Physicians</h2>
          </Reveal>
          <div className="mt-7">
            <ProviderGrid providers={physicians} />
          </div>
          <Reveal>
            <h2 className="font-display text-[clamp(27px,4.5vw,40px)] mt-16">Physician Assistants</h2>
          </Reveal>
          <div className="mt-7">
            <ProviderGrid providers={pas} />
          </div>
        </div>
      </section>
    </>
  );
}
