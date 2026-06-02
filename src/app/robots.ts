import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/zapapi"],
    },
    sitemap: "https://www.equifirst.ae/sitemap.xml",
  };
}
