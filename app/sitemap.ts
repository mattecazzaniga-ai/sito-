import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/storia", "/albo-doro", "/contatti", "/privacy-policy", "/cookie-policy"];
  const highPriority = new Set(["", "/storia", "/albo-doro"]);

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: highPriority.has(route) ? (route === "" ? 1 : 0.7) : 0.4,
  }));
}
