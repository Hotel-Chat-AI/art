import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '', // Empty for local development
  images: {
    unoptimized: true
  }
};

export default nextConfig;
