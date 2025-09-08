// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'equifirst.ae',
//         pathname: '/**',
//       },
//       ...(process.env.NODE_ENV === 'development'
//         ? [{
//             protocol: 'http',
//             hostname: 'localhost',
//             port: '3000',
//             pathname: '/**',
//           }]
//         : []),
//     ],
//     formats: ['image/avif', 'image/webp'],
//   },

//   async headers() {
//     return [
//       {
//         source: '/_next/image',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         pathname: '/**',
//       },
//       ...(process.env.NODE_ENV === 'development'
//         ? [{
//             protocol: 'http',
//             hostname: 'localhost',
//             port: '3000',
//             pathname: '/**',
//           }]
//         : []),
//     ],
//     formats: ['image/avif', 'image/webp'],
//   },

//   async headers() {
//     return [
//       {
//         source: '/_next/image',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable',
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Production domain
      {
        protocol: 'https',
        hostname: 'equifirst.ae',
        pathname: '/**',
      },
      // Localhost without forcing port
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      // Allow 127.0.0.1 (sometimes Next resolves to this)
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

