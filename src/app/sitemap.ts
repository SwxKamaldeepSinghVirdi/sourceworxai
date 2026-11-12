import type { MetadataRoute } from "next";
import { GROWTH_SOLUTIONS } from "@/data/solutions";
import { LAUNCH_ARTICLES } from "@/data/site-content";

const BASE_URL = "https://sourceworx.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/growth",
    "/productivity",
    "/governance",
    "/solutions",
    "/solutions/roomos",
    "/solutions/ztd",
    "/solutions/singularity",
    "/platform",
    "/security",
    "/about",
    "/resources",
    "/contact",
  ];

  const growthRoutes = GROWTH_SOLUTIONS.map((s) => `/solutions/${s.slug}`);
  const articleRoutes = LAUNCH_ARTICLES.map((a) => `/resources/${a.slug}`);

  return [...staticRoutes, ...growthRoutes, ...articleRoutes].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date("2026-11-11"),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

