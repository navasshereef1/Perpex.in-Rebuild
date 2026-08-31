import type { MetadataRoute } from "next";
import { services } from "@/lib/seedData";

const baseUrl = "https://perpex.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/engagement",
    "/results",
    "/about",
    "/blog",
    "/careers",
    "/consultation",
    "/privacy-policy",
    "/terms-of-service",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes];
}
