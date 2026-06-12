import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { crisisLines, resourceSections } from "@/data/communityResources";
import type { CommunityResource } from "@/data/communityResources";

export const metadata: Metadata = {
  title: "Community Resources",
  description:
    "Low cost dental care, medical clinics, mental health support, crisis lines, and shelters serving patients of Banner Gateway Emergency Department.",
};

/* Tap to call icon */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CallButton({ phone, tel, light = false }: { phone: string; tel: string; light?: boolean }) {
  return (
    <a
      href={`tel:${tel}`}
      className={`inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full font-semibold text-[15px] no-underline transition-all ${
        light
          ? "bg-canvas text-saguaro hover:-translate-y-px hover:shadow-lift"
          : "bg-sand text-saguaro hover:bg-saguaro hover:text-white"
      }`}
    >
      <PhoneIcon />
      {phone === "988" || phone === "211" ? `Dial ${phone}` : phone}
    </a>
  );
}

function ResourceCard({ r }: { r: CommunityResource }) {
  return (
    <div className="bg-white rounded-card shadow-card p-5 flex flex-col gap-2.5 h-full">
      <strong className="font-display font-semibold text-[17.5px] leading-snug">{r.name}</strong>
      {r.note && <p className="text-ink-soft text-[15px] leading-normal">{r.note}</p>}
      {r.address && (
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(r.address)}`}
          target="_blank"
          rel="noopener"
          className="text-[14px] text-saguaro underline decoration-sand-deep underline-offset-4 hover:decoration-copper"
        >
          {r.address}
        </a>
      )}
      {r.url && (
        <a
          href={r.url}
          target="_blank"
          rel="noopener"
          className="text-[14px] text-saguaro underline decoration-sand-deep underline-offset-4 hover:decoration-copper break-all"
        >
          {r.url.replace("https://", "")}
        </a>
      )}
      {r.phone && r.tel && (
        <div className="mt-auto pt-1.5">
          <CallButton phone={r.phone} tel={r.tel} />
        </div>
      )}
    </div>
  );
}

export default function CommunityResources() {
  return (
    <>
      <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(36px,5vw,56px)]">
        <Reveal className="wrap">
          <span className="eyebrow">Community resources</span>
          <h1 className="font-display text-[clamp(32px,5.5vw,48px)]">Help beyond the emergency department</h1>
          <p className="lede mt-4">
            Healing does not stop when you leave our doors. These are local programs our team trusts patients to
            know about: low cost dental and medical care, mental health support, and emergency shelter. Tap any
            phone number to call directly.
          </p>
        </Reveal>
      </section>

      {/* 211 callout */}
      <section className="pb-[clamp(36px,5vw,56px)]">
        <Reveal className="wrap">
          <div className="bg-saguaro text-canvas rounded-card shadow-card p-7 sm:p-9">
            <h2 className="font-display text-[clamp(23px,3.5vw,30px)]">Not sure where to start? Dial 2-1-1.</h2>
            <p className="mt-3 max-w-[640px] text-canvas/90">
              In Arizona, dial 2-1-1 to connect with vital community resources. It is a free, confidential service
              that directs you to local support, including housing and utility assistance, food banks, and health
              care programs.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <CallButton phone="211" tel="211" light />
              <a
                href="https://211arizona.org"
                target="_blank"
                rel="noopener"
                className="text-copper-soft font-semibold no-underline hover:underline text-[15px]"
              >
                Or visit 211arizona.org
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Crisis lines */}
      <section className="pb-[clamp(40px,6vw,64px)]" aria-labelledby="crisis-heading">
        <div className="wrap">
          <Reveal>
            <h2 id="crisis-heading" className="font-display text-[clamp(24px,4vw,34px)]">
              If you are in crisis right now
            </h2>
            <p className="text-ink-soft mt-2 max-w-[640px]">
              These lines are free, confidential, and answered 24 hours a day.
            </p>
          </Reveal>
          <div className="grid gap-5 min-[680px]:grid-cols-3 mt-7">
            {crisisLines.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.08} className="h-full">
                <ResourceCard r={r} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jump links */}
      <section className="pb-[clamp(36px,5vw,52px)]">
        <div className="wrap flex flex-wrap gap-2.5">
          {resourceSections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="chip no-underline text-ink hover:bg-sand-deep transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </section>

      {/* Resource sections */}
      {resourceSections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-24 py-[clamp(48px,7vw,80px)] ${idx % 2 === 0 ? "bg-sand" : ""}`}
        >
          <div className="wrap">
            <Reveal>
              <h2 className="font-display text-[clamp(25px,4vw,36px)]">{section.title}</h2>
              <p className="text-ink-soft mt-2.5 max-w-[640px]">{section.blurb}</p>
            </Reveal>
            <div className="grid gap-5 min-[680px]:grid-cols-2 min-[980px]:grid-cols-3 mt-8">
              {section.resources.map((r) => (
                <ResourceCard key={r.name} r={r} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Disclaimer */}
      <section className="py-[clamp(40px,6vw,64px)]">
        <div className="wrap">
          <p className="callout">
            This list is shared as a courtesy from the Banner Gateway Medical Center community resource guide.
            Banner Health does not guarantee the accuracy of this information and has not completed an independent
            evaluation of these providers. The decision on which provider to use remains with the patient. Please
            call ahead to confirm hours, services, and eligibility.
          </p>
        </div>
      </section>
    </>
  );
}
