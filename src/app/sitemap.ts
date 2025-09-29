import { MetadataRoute } from "next";

type Blog = {
  slug: string;
  date?: string;
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

  // Fetch blog posts from API
  let blogs: Blog[] = [];
  try {
    const res = await fetch(`${baseUrl}/api/blogs`, { next: { revalidate: 60 } });
    const json = await res.json();

    if (json && Array.isArray(json.data)) {
      blogs = json.data;
    }
  } catch (err) {
    console.error("Error fetching blogs for sitemap:", err);
  }

  return [
    // Static pages
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    // Blog pages
    ...blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.date ? new Date(blog.date) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
