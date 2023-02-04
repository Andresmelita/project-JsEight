/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images2.imgbox.com'],
  },
  publicRuntimeConfig: {
    BASE_URL: 'https://paracuando-team1.academlo.tech/api/v1',
  },
};

module.exports = nextConfig;
