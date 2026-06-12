import type { MetadataRoute } from "next";
import { providers } from "@/data/providers";

const BASE = "https://meetyourerteam.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/team", "/your-visit", "/resources", "/community-resources", "/faq", "/contact"];

  const pages: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));

  const providerPages: MetadataRoute.Sitemap = providers.map((p) => ({
    url: `${BASE}/team/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...pages, ...providerPages];
}
