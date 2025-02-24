import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/group-seminar.github.io',
  trailingSlash: true,
};

export default nextConfig;
