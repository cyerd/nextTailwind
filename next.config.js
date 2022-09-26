/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["fakestoreapi.com",],
  },
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: "http://localhost:3000/api/:slug*",
      },
    ];
  },
};
