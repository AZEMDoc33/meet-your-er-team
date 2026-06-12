/* ============================================================
   PROVIDER ROSTER — the only file to edit for staffing changes
   ------------------------------------------------------------
   Photos: drop an 800x1000 (4:5) JPG in /public/images and set
   photo: "/images/lastname.jpg". Set photo: null for the
   generative avatar. Every profile field is optional — empty
   fields are hidden automatically.
   ============================================================ */

export type Provider = {
  slug: string;
  name: string;
  role: string;
  credential: "MD" | "DO" | "PA";
  photo: string | null;
  quote: string;
  medSchool?: string;
  residency?: string;
  boardCert?: string;
  yearsInPractice?: string;
  specialInterests?: string[];
  personalInterests?: string[];
  funFact?: string;
  azActivity?: string;
  message?: string;
};

export const providers: Provider[] = [
  {
    slug: "boesch",
    name: "David Boesch, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "cummins",
    name: "Eric Cummins, MD",
    role: "Emergency Physician · Facility Medical Director",
    credential: "MD",
    photo: "/images/cummins.jpg",
    quote: "My goal is that every patient feels heard, respected, and informed during their visit.",
    boardCert: "Emergency Medicine",
    specialInterests: ["Patient experience", "Sepsis care", "ED operations"],
    personalInterests: ["Softball", "Fitness training", "Science fiction", "Dad of 3 daughters"],
    message:
      "Nobody plans to be in the emergency department. My job is to make sure that while you're here, you always know what's happening and what comes next.",
  },
  {
    slug: "andes",
    name: "Justin Andes, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "berman",
    name: "Dean Berman, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "egbert",
    name: "John Egbert, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "winter",
    name: "Amanda Winter, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "hapeman",
    name: "Brett Hapeman, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "hamblin",
    name: "Leighton Hamblin, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "mcdowell",
    name: "Matthew McDowell, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "hunter",
    name: "Jonathan Hunter, MD",
    role: "Emergency Physician",
    credential: "MD",
    photo: null,
    quote: "",
    boardCert: "Emergency Medicine",
  },
  {
    slug: "mckelvy",
    name: "Andrew McKelvy, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
  {
    slug: "figueroa",
    name: "Alejandra Figueroa, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
  {
    slug: "jimenez",
    name: "Andrew Jimenez, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
  {
    slug: "lombardi",
    name: "Kathryn Lombardi, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
  {
    slug: "pavlou",
    name: "Brian Pavlou, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
  {
    slug: "fackler",
    name: "Robert Fackler, PA-C",
    role: "Physician Assistant",
    credential: "PA",
    photo: null,
    quote: "",
  },
];

export const physicians = providers.filter((p) => p.credential !== "PA");
export const pas = providers.filter((p) => p.credential === "PA");
export const getProvider = (slug: string) => providers.find((p) => p.slug === slug);
