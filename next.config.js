/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'desarrollo-pro-paracuando-api.s3.amazonaws.com',
        port: '',
      },
    ],
  },
  publicRuntimeConfig: {
    BASE_URL:
      process.env.NODE_ENV === 'development'
        ? 'https://paracuando-academlo-api.academlo.tech/api/v1' // development api
        : 'https://paracuando-academlo-api.academlo.tech/api/v1', // production api
  },
};

module.exports = nextConfig;
