import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-[clamp(120px,20vh,180px)] pb-24 text-center">
      <div className="wrap">
        <span className="eyebrow">Page not found</span>
        <h1 className="font-display text-[clamp(30px,5vw,44px)]">We could not find that page</h1>
        <p className="lede mx-auto mt-4">The link may be outdated. Everything on this site is one tap from home.</p>
        <p className="mt-7"><Link className="btn-primary" href="/">Back to home</Link></p>
      </div>
    </section>
  );
}
