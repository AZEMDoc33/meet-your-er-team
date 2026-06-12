# Meet Your ER Team — meetyourerteam.com

Patient focused website introducing the physicians and clinicians of Banner Gateway
Emergency Department. Next.js 14 + TypeScript + Tailwind CSS + Framer Motion.

## Deploy

1. Upload all contents of this folder to the repo (GitHub web: "Add file -> Upload files",
   drag everything in, commit). Do NOT upload node_modules or .next — they are gitignored
   and Vercel builds them.
2. Vercel: Add New Project -> Import `AZEMDoc33/meet-your-er-team` -> Framework: Next.js
   (auto detected) -> Deploy.
3. Domain: Vercel -> Settings -> Domains -> add meetyourerteam.com + www.
   Porkbun DNS: A record `@` -> 76.76.21.21, CNAME `www` -> cname.vercel-dns.com
   (confirm exact values in the Vercel domain panel). Set apex as primary.

## Routine edits (GitHub web editor friendly)

| Task | File |
|---|---|
| Roster, bios, quotes, photos | `src/data/providers.ts` |
| New patient comments | `src/data/testimonials.ts` (newest at top, strip names/dates) |
| FAQ answers | `src/data/faqs.ts` |
| Colors / fonts / tokens | `tailwind.config.ts` + `src/app/globals.css` |

Adding a headshot: upload an 800x1000 (4:5) JPG to `public/images/`, then change
`photo: null` to `photo: "/images/lastname.jpg"` in providers.ts. Until then, each
provider gets a unique generative "desert arc" avatar seeded by their name.

## Feedback form

`src/components/FeedbackForm.tsx` -> replace `YOUR_WEB3FORMS_ACCESS_KEY` with a free
key from web3forms.com pointed at the leadership email. Until configured, the form
politely tells patients it is not connected.

## Animation system

- Site-wide copper scroll progress line (the visit journey motif)
- Hero: Ken Burns zoom, staggered title words, journey line draw with spring dots, parallax on scroll
- Page transitions on every route, scroll reveals with stagger, parallax photo bands
- Spring accordion, crossfading testimonials, card hover lifts, animated form success state
- All motion respects prefers-reduced-motion automatically (MotionConfig reducedMotion="user")

## Design system

Canvas #FAF7F2 · Ink #2B3A35 · Saguaro #3E5C50 · Copper #B5722F · Sand #EDE5D8 · Sky #8FA8B8
Fraunces (display) + Public Sans (body), self hosted in src/fonts. No red anywhere.
Environmental photos: warm monochrome duotone. Headshots: full color.
