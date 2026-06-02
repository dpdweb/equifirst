import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Emergency production fix: bypass /_next/image optimizer and serve public assets directly.
    unoptimized: true,
    localPatterns: [
      { pathname: '/assets/**' },
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'www.equifirst.ae', pathname: '/**' },
      { protocol: 'https', hostname: 'equifirst.ae', pathname: '/**' },
      { protocol: 'http', hostname: 'localhost', pathname: '/**' },
      { protocol: 'http', hostname: '127.0.0.1', pathname: '/**' },
    ],
  },
};

export default nextConfig;
