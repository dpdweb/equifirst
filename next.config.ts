const nextConfig = {
  images: {
    remotePatterns: [
      // Production domain (always included)
      {
        protocol: 'https',
        hostname: 'equifirst.ae',
        port: '',
        pathname: '/**',
      },
      // Localhost (only included in development)
      ...(process.env.NODE_ENV === 'development'
        ? [{
            protocol: 'http',
            hostname: 'localhost',
            port: '',
            pathname: '/**',
          }]
        : []),
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;