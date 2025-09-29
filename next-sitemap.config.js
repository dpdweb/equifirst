/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.equifirst.ae',
  generateRobotsTxt: true,
  sitemapSize: 7000, // keep everything in 1 sitemap
  changefreq: 'weekly',
  priority: 0.7,
   exclude: ['/admin/*'], // (optional) exclude routes
  outDir: './public',

  // Optional: Transform to add dynamic pages
  transform: async (config, path) => {
    // Default settings for static pages
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    if (path.startsWith('/blog')) priority = 0.9;

    return {
      loc: path,                // URL
      changefreq: 'weekly',
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },

  // Custom extra URLs (dynamic)
  additionalPaths: async (config) => {
    // Example: pretend these come from DB/API
    const blogPosts = [
      { slug: 'digital-procurement-gcc' },
      { slug: 'ai-in-construction' },
    ];

    return blogPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },
};
