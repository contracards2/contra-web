/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  webpack: (config) => {
    config.resolve.alias['@emotion/react'] = require.resolve('@emotion/react');
    config.resolve.alias['@emotion/styled'] = require.resolve('@emotion/styled');

    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.contra.cards',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.thirdwebcdn.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
