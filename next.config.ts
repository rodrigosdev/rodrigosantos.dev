import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['geist/font/pixel'],
    turbopackRustReactCompiler: true,
  },
};

export default nextConfig;
