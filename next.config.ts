import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/seminar-visualds.github.io',
};

export default nextConfig;
