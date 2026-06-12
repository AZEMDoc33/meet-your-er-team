import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Address, phone, parking, and directions for the Banner Gateway Medical Center emergency department in Gilbert, AZ.",
};

export default function Contact() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(32px,5vw,48px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Contact &amp; directions</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Find us</h1>
        </Reveal>
      </section>
      <section className="pb-[clamp(56px,9vw,104px)]">
        <div className="wrap">
          <div className="grid gap-5 min-[680px]:grid-cols-2">
            <Reveal>
              <div className="bg-white rounded-card shadow-card p-7 h-full">
                <h3 className="font-display text-[20px]">Banner Gateway Medical Center</h3>
                <p className="mt-2">1900 N Higley Rd<br />Gilbert, AZ 85234</p>
                <p className="mt-2 text-ink-soft text-[16px]">
                  The emergency entrance is clearly marked from Higley Road, with dedicated ED parking adjacent to
                  the entrance.
                </p>
                <p className="mt-4">
                  <a className="btn-primary" href="https://maps.google.com/?q=Banner+Gateway+Medical+Center+1900+N+Higley+Rd+Gilbert+AZ" rel="noopener">
                    Open in Google Maps
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="bg-white rounded-card shadow-card p-7 h-full">
                <h3 className="font-display text-[20px]">Phone</h3>
                <p className="mt-2">
                  Main hospital: <a className="text-link" href="tel:4805432000">(480) 543-2000</a>
                </p>
                <p className="mt-3 text-ink-soft text-[16px]">
                  <strong className="text-ink">In an emergency, call 911.</strong> Do not call ahead — emergency
                  departments cannot hold places in line, and EMS will bring you to the most appropriate facility.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <div className="rounded-card overflow-hidden shadow-card">
              <iframe
                title="Map to Banner Gateway Medical Center"
                src="https://www.google.com/maps?q=Banner+Gateway+Medical+Center,1900+N+Higley+Rd,Gilbert,AZ&output=embed"
                width="100%"
                height="380"
                className="block border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
