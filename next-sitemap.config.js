/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.equifirst.ae',
  generateRobotsTxt: true,
  sitemapSize: 7000,       // keep everything in one sitemap
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*'], // (optional) exclude routes
  outDir: './public',

  // Remove the manual additionalPaths with hard-coded links
  // Let next-sitemap automatically pick all static pages

  // If you still need dynamic pages later, you can add:
  // additionalPaths: async (config) => {
  //   const posts = await fetch('https://api.equifirst.ae/posts').then(res => res.json());
  //   return posts.map((post) => ({
  //     loc: `/blog/${post.slug}`,
  //     changefreq: 'weekly',
  //     priority: 0.9,
  //     lastmod: new Date().toISOString(),
  //   }));
  // }
};
