import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow images from external domains (e.g., equifirst.ae)
    remotePatterns: [
      {
        protocol: 'https', // Using HTTPS for secure image requests
        hostname: 'equifirst.ae', // The domain of your backend server
        port: '', // Leave empty unless needed
        pathname: '/**', // Allow all image paths from the domain
      },
    ],
  },
  // You can add other configurations as needed (e.g., Webpack, React Strict Mode, etc.)
};

export default nextConfig;
