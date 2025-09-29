/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.equifirst.ae', // your domain
  generateRobotsTxt: true,  // (optional) generate robots.txt too
  sitemapSize: 5000,        // split sitemap if you have more than 5000 URLs
  changefreq: 'weekly',     // default frequency
  priority: 0.7,            // default priority
  exclude: ['/admin/*'], // (optional) exclude routes
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.equifirst.ae/sitemap.xml', // (optional) extra sitemaps
    ],
  },
};
