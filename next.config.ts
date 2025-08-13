import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["localhost"], // Add your backend image host domain here
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '82.25.105.217',
        port: '', // leave empty unless needed
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
