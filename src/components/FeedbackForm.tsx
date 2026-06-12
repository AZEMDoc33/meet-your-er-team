"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";

const TYPES = ["Recognize a physician or PA", "Recognize a nurse", "Recognize support staff", "Share a concern"];
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // <- paste your key from web3forms.com

export default function FeedbackForm() {
  const params = useSearchParams();
  const provider = params.get("provider") || "";
  const [type, setType] = useState(TYPES[0]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unconfigured">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (ACCESS_KEY.startsWith("YOUR_")) {
      setStatus("unconfigured");
      return;
    }
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.set("access_key", ACCESS_KEY);
    data.set("subject", "Meet Your ER Team — Website Feedback");
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-[620px] bg-white rounded-card shadow-card p-9 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 16, delay: 0.15 }}
          className="w-14 h-14 mx-auto rounded-full bg-saguaro flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#fff" strokeWidth={2.5}>
            <path d="M5 13l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <h3 className="font-display text-[22px] mt-5">Thank you</h3>
        <p className="text-ink-soft mt-2">Your feedback was sent to our department leadership.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-[18px] max-w-[620px]" noValidate>
      <input type="hidden" name="provider_mentioned" value={provider} />
      <fieldset>
        <legend className="font-semibold text-[15px] mb-2.5">What would you like to share?</legend>
        <div className="grid grid-cols-2 gap-2.5">
          {TYPES.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              aria-pressed={type === t}
              className={`min-h-[56px] px-3 py-2.5 rounded-xl border-[1.5px] text-[15px] font-medium transition-all ${
                type === t ? "bg-saguaro border-saguaro text-white" : "bg-white border-sand-deep hover:border-saguaro"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <input type="hidden" name="feedback_type" value={type} />
      </fieldset>
      <div>
        <label htmlFor="fb-message" className="font-semibold text-[15px] block mb-1.5">Your message</label>
        <textarea
          id="fb-message"
          name="message"
          required
          placeholder={provider ? `Tell us about your experience with ${provider}...` : "Tell us about your experience..."}
          className="w-full min-h-[140px] px-4 py-3 rounded-xl border-[1.5px] border-sand-deep bg-white text-[16px] focus:border-copper"
        />
      </div>
      <div>
        <label htmlFor="fb-name" className="font-semibold text-[15px] block mb-1.5">Your name (optional)</label>
        <input id="fb-name" name="name" autoComplete="name" className="w-full min-h-[48px] px-4 rounded-xl border-[1.5px] border-sand-deep bg-white text-[16px] focus:border-copper" />
      </div>
      <div>
        <label htmlFor="fb-email" className="font-semibold text-[15px] block mb-1.5">Email if you would like a response (optional)</label>
        <input id="fb-email" name="email" type="email" autoComplete="email" className="w-full min-h-[48px] px-4 rounded-xl border-[1.5px] border-sand-deep bg-white text-[16px] focus:border-copper" />
      </div>
      <motion.button whileTap={{ scale: 0.97 }} className="btn-primary justify-self-start" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send feedback"}
      </motion.button>
      <AnimatePresence>
        {status === "unconfigured" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="status" className="font-medium text-copper">
            This form isn&apos;t connected yet. Please share feedback with any team member, or use the survey link from your visit.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="status" className="font-medium text-copper">
            Something went wrong sending your feedback. Please try again, or tell any member of our team.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
