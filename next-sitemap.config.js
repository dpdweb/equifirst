/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.equifirst.ae",
  generateRobotsTxt: true,
  outDir: "./public",
  sitemapSize: 10000,
  changefreq: "weekly",
  priority: 0.7,
  generateIndexSitemap: false, // only one sitemap.xml
  sourceDir: "src/app",

  // Exclude backend/admin routes
  exclude: [
    "/zapapi/*",
    "/admin/*",
  ],

  // Add dynamic blog posts
  additionalPaths: async () => {
    try {
      // Adjust this to match your real blog API
      const res = await fetch("https://www.equifirst.ae/api/blogs");
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
