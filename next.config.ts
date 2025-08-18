import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["localhost"], // Add your backend image host domain here
//   },
// };

// export default nextConfig;


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'equifirst.ae',
        port: '', // leave empty unless needed
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
