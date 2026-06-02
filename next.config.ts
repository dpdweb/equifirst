/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Emergency production fix:
    // Serve local/static images directly from /public instead of routing them
    // through /_next/image. The live site was returning 400 for optimizer URLs
    // such as /_next/image?url=%2Fassets%2Fimages%2Fcontact-hero.jpg.
    unoptimized: true,
    localPatterns: [
      { pathname: '/assets/**' },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.equifirst.ae',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'equifirst.ae',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
