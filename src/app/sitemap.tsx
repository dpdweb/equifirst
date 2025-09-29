import { MetadataRoute } from "next";

type Blog = {
  slug: string;
  updated_at?: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const blogs: Blog[] = await fetch(`${baseUrl}/api/blogs`).then((res) =>
    res.json()
  );

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.up
