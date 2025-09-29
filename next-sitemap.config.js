/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.equifirst.ae",
  generateRobotsTxt: true,
  outDir: "./public",
  sitemapSize: 10000,
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false,
  sourceDir: "src/app",

  // Add blog posts dynamically
  additionalPaths: async () => {
    try {
      const res = await fetch("https://www.equifirst.ae/api/blogs"); // adjust to your real API
      const blogs = await res.json();

      return blogs.map((blog) => ({
        loc: `/blog/${blog.slug}`,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: blog.updated_at || new Date().toISOString(),
      }));
    } catch (err) {
      console.error("Error fetching blogs for sitemap:", err);
      return [];
    }
  },
};
