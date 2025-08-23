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

  // Allow development cross-origin requests from specific origins
  allowedDevOrigins: [
    "https://equifirst.ae",  // Add your production domain
    "http://localhost:3000", // If you're developing locally
  ],
};

export default nextConfig;
