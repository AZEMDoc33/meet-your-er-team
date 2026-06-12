import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF7F2",
        ink: { DEFAULT: "#2B3A35", soft: "#4A5A54" },
        saguaro: { DEFAULT: "#3E5C50", deep: "#31493F" },
        copper: { DEFAULT: "#B5722F", soft: "#C98F52" },
        sand: { DEFAULT: "#EDE5D8", deep: "#E2D7C5" },
        sky: "#8FA8B8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-public-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 24px rgba(43,58,53,.08)",
        lift: "0 8px 32px rgba(43,58,53,.14)",
      },
      borderRadius: { card: "16px" },
      maxWidth: { site: "1120px" },
    },
  },
  plugins: [],
};
export default config;
