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

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      ...(process.env.NODE_ENV === 'development'
        ? [{
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/**',
          }]
        : []),
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

