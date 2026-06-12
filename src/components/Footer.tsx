import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-saguaro-deep text-canvas/85 pt-14 pb-28 text-[15.5px]">
      <div className="wrap grid gap-8 min-[880px]:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="font-display text-canvas text-[19px] mb-3">Banner Gateway Emergency Department</h3>
          <p>1900 N Higley Rd<br />Gilbert, AZ 85234</p>
          <p className="mt-2.5">
            Main hospital: <a className="text-copper-soft no-underline hover:underline" href="tel:4805432000">(480) 543-2000</a>
          </p>
          <p className="mt-4">
            <a
              className="btn-light"
              href="https://maps.google.com/?q=Banner+Gateway+Medical+Center+1900+N+Higley+Rd+Gilbert+AZ"
              rel="noopener"
            >
              Get directions
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-display text-canvas text-[19px] mb-3">Explore</h3>
          <ul className="space-y-1.5">
            <li><Link className="text-copper-soft no-underline hover:underline" href="/about">About us</Link></li>
            <li><Link className="text-copper-soft no-underline hover:underline" href="/team">Our providers</Link></li>
            <li><Link className="text-copper-soft no-underline hover:underline" href="/your-visit">Your visit, step by step</Link></li>
            <li><Link className="text-copper-soft no-underline hover:underline" href="/faq">Common questions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-canvas text-[19px] mb-3">For patients</h3>
          <ul className="space-y-1.5">
            <li><Link className="text-copper-soft no-underline hover:underline" href="/resources">Patient resources</Link></li>
            <li><Link className="text-copper-soft no-underline hover:underline" href="/feedback">Patient feedback</Link></li>
            <li><Link className="text-copper-soft no-underline hover:underline" href="/contact">Contact &amp; directions</Link></li>
          </ul>
        </div>
        <div className="min-[880px]:col-span-3 border-t border-canvas/15 pt-5 text-[13.5px] text-canvas/60">
          <p>
            This site is maintained by the emergency medicine providers of Banner Gateway Medical Center to help
            patients and families understand emergency care. It is not an official Banner Health website and does
            not provide medical advice.
          </p>
          <p className="mt-2 font-semibold">If you are experiencing a medical emergency, call 911 or come to the emergency department.</p>
        </div>
      </div>
    </footer>
  );
}
