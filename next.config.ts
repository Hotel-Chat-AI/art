import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/art', // Set to /art for deployment
  images: {
    unoptimized: true
  }
};

export default nextConfig;
