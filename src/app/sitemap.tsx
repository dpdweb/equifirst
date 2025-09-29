import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.equifirst.ae";

  const staticRoutes = [
    "",
    "/about-us",
    "/blog",
    "/coming-soon",
    "/contact-us",
    "/faqs",
    "/mortgage-calculator",
    "/services",
    "/services/buyout-refinance",
    "/services/equity-release",
    "/services/handover-finance",
    "/services/non-resident-finance",
    "/services/off-plan-finance",
    "/services/secondary-market-finance",
    "/terms-conditions",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
}
