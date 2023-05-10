/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/products/page/1',
      }
    ];
  },
}

module.exports = nextConfig
