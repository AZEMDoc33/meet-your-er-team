import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import Avatar from "@/components/Avatar";
import { providers, getProvider } from "@/data/providers";

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProvider(slug);
  return {
    title: p ? p.name : "Provider",
    description: p
      ? `${p.name}, ${p.role} at Banner Gateway Medical Center in Gilbert, AZ.`
      : "Provider profile",
  };
}

export default async function ProviderProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProvider(slug);
  if (!p) notFound();

  const facts: [string, string][] = [
    ["Medical school", p.medSchool ?? ""],
    ["Residency", p.residency ?? ""],
    ["Board certification", p.boardCert ?? ""],
    ["In practice", p.yearsInPractice ?? ""],
  ].filter((f): f is [string, string] => Boolean(f[1]));

  const hasDetails = facts.length > 0 || Boolean(p.message);

  return (
    <section className="pt-[clamp(96px,14vh,140px)] pb-[clamp(56px,9vw,104px)]">
      <div className="wrap">
        <Link href="/team" className="inline-flex items-center gap-1.5 no-underline font-semibold text-saguaro text-[15px] mb-5">
          &larr; All providers
        </Link>
        <div className="grid gap-8 min-[880px]:grid-cols-[380px_1fr] min-[880px]:gap-14 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-lift bg-sand">
              {p.photo ? (
                <Image src={p.photo} alt={`Portrait of ${p.name}`} fill priority className="object-cover" sizes="(max-width: 880px) 100vw, 380px" />
              ) : (
                <Avatar provider={p} className="absolute inset-0 w-full h-full" />
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">{p.role}</span>
            <h1 className="font-display text-[clamp(30px,5vw,44px)]">{p.name}</h1>
            {p.quote && (
              <p className="font-display italic text-saguaro text-[clamp(20px,3vw,25px)] leading-[1.45] mt-4">
                <span className="text-copper">&ldquo;</span>
                {p.quote}
                <span className="text-copper">&rdquo;</span>
              </p>
            )}

            {facts.length > 0 && (
              <dl className="mt-7 border-t border-sand-deep">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[140px_1fr] gap-3 py-3 border-b border-sand-deep text-[16px]">
                    <dt className="font-semibold text-ink-soft text-[13px] tracking-[.06em] uppercase pt-0.5">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            {p.specialInterests && p.specialInterests.length > 0 && (
              <>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mt-8">Clinical interests</h3>
                <div className="flex flex-wrap gap-2.5 mt-3.5">
                  {p.specialInterests.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </>
            )}

            {p.personalInterests && p.personalInterests.length > 0 && (
              <>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mt-8">Beyond the ED</h3>
                <div className="flex flex-wrap gap-2.5 mt-3.5">
                  {p.personalInterests.map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </>
            )}

            {p.azActivity && (
              <>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mt-8">Favorite Arizona activity</h3>
                <p className="text-ink-soft mt-2">{p.azActivity}</p>
              </>
            )}

            {p.funFact && (
              <>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mt-8">Fun fact</h3>
                <p className="text-ink-soft mt-2">{p.funFact}</p>
              </>
            )}

            {p.message && (
              <>
                <h3 className="font-display text-[clamp(21px,3vw,25px)] mt-8">A message to patients</h3>
                <p className="text-ink-soft mt-2">{p.message}</p>
              </>
            )}

            {!hasDetails && (
              <p className="text-ink-soft mt-6">
                Full profile coming soon — we are adding photos and bios for our whole team.
              </p>
            )}

            <p className="mt-9">
              <Link className="btn-primary" href="/feedback">
                &#9825;&nbsp; Patient feedback
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
