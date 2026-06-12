/* Generative "desert arc" avatar.
   Each provider without a photo gets a unique, deterministic
   composition of layered arcs in the site palette, seeded by
   their name, with their initials set in Fraunces.
   Swapping in a real photo later is a one-line data change. */

import type { Provider } from "@/data/providers";

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function initials(name: string): string {
  const base = name.split(",")[0].trim().split(/\s+/);
  return (base[0][0] + (base[base.length - 1][0] || "")).toUpperCase();
}

const PALETTES: [string, string, string][] = [
  ["#3E5C50", "#B5722F", "#C98F52"], // saguaro / copper / soft copper
  ["#B5722F", "#3E5C50", "#8FA8B8"], // copper / saguaro / sky
  ["#8FA8B8", "#B5722F", "#3E5C50"], // sky / copper / saguaro
  ["#3E5C50", "#8FA8B8", "#B5722F"], // saguaro / sky / copper
];

export default function Avatar({ provider, className = "" }: { provider: Provider; className?: string }) {
  const h = hash(provider.name);
  const [c1, c2, c3] = PALETTES[h % PALETTES.length];
  // deterministic per-person geometry
  const r1 = 150 + (h % 60);            // sun radius
  const sunX = 90 + (h % 220);          // sun position
  const sunY = 110 + ((h >> 3) % 90);
  const wave = 30 + ((h >> 5) % 50);    // dune curvature
  const duneY = 300 + ((h >> 7) % 60);

  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={`Stylized portrait placeholder for ${provider.name}`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* canvas sky */}
      <rect width="400" height="500" fill="#EDE5D8" />
      {/* sun arc */}
      <circle cx={sunX} cy={sunY} r={r1} fill={c3} opacity="0.35" />
      <circle cx={sunX} cy={sunY} r={r1 * 0.62} fill={c2} opacity="0.5" />
      {/* layered dunes */}
      <path d={`M0 ${duneY} Q 130 ${duneY - wave} 260 ${duneY + 8} T 400 ${duneY - 6} V500 H0 Z`} fill={c1} opacity="0.9" />
      <path d={`M0 ${duneY + 70} Q 150 ${duneY + 70 - wave * 0.7} 300 ${duneY + 80} T 400 ${duneY + 70} V500 H0 Z`} fill="#31493F" opacity="0.92" />
      {/* initials */}
      <text
        x="200"
        y={duneY + 56}
        textAnchor="middle"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={600}
        fontSize="64"
        fill="#FAF7F2"
      >
        {initials(provider.name)}
      </text>
    </svg>
  );
}
