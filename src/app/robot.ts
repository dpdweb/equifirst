import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/zapapi/", "/admin/"],
      },
    ],
    sitemap: "https://www.equifirst.ae/sitemap.xml",
  };
}
