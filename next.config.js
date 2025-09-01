/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true, optimizePackageImports: ['react'] },
};

module.exports = nextConfig;