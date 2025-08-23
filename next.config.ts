import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'equifirst.ae',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Allow cross-origin requests from the frontend domain
  allowedDevOrigins: [
    "https://equifirst.ae",  // Add your production domain (or any other dev domains)
    "http://localhost:3000", // If you're developing locally
  ],
};

export default nextConfig;
