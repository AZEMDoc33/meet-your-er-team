"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Providers" },
  { href: "/your-visit", label: "Your Visit" },
  { href: "/resources", label: "Resources" },
  { href: "/community-resources", label: "Community Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const transparent = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const tone = transparent ? "text-canvas" : "text-ink";
  const bar = open ? "bg-canvas" : transparent ? "bg-canvas" : "bg-ink";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[110] flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3.5 transition-all duration-300 ${
          !transparent && !open ? "bg-canvas/90 backdrop-blur-md shadow-[0_1px_0_rgba(43,58,53,.08)]" : ""
        }`}
      >
        <Link href="/" className={`font-display font-semibold text-[19px] leading-tight no-underline transition-colors ${open ? "text-canvas" : tone} relative z-[111]`}>
          Banner Gateway
          <small className="block font-body font-medium text-[11px] tracking-[.12em] uppercase opacity-85">
            Emergency Department
          </small>
        </Link>

        <nav aria-label="Main" className="hidden min-[1100px]:flex gap-6 items-center">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className={`no-underline font-medium text-[15.5px] pb-1 border-b-2 transition-colors ${tone} ${
                pathname === n.href ? "border-copper" : "border-transparent hover:border-copper"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          className="min-[1100px]:hidden w-12 h-12 flex flex-col items-center justify-center gap-[5px] relative z-[111]"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className={`block w-[22px] h-[2px] rounded ${bar}`} />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className={`block w-[22px] h-[2px] rounded ${bar}`} />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className={`block w-[22px] h-[2px] rounded ${bar}`} />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[105] bg-saguaro-deep flex flex-col justify-center px-7 overflow-y-auto"
          >
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {NAV.map((n) => (
                <motion.div key={n.href} variants={{ hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0 } }}>
                  <Link
                    href={n.href}
                    aria-current={pathname === n.href ? "page" : undefined}
                    className={`block font-display text-[clamp(25px,5.5vw,34px)] no-underline py-2.5 border-b border-canvas/10 ${
                      pathname === n.href ? "text-copper-soft" : "text-canvas"
                    }`}
                  >
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <motion.p
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                className="mt-6 text-[15px] text-sky"
              >
                Banner Gateway Medical Center
                <br />
                1900 N Higley Rd, Gilbert, AZ 85234
                <br />
                <a href="tel:4805432000" className="text-copper-soft no-underline">
                  (480) 543-2000
                </a>
              </motion.p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
