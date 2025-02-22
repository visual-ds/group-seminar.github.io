import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Importante para generar archivos estáticos
  images: {
    unoptimized: true, // Necesario para exportación estática
  }
};

export default nextConfig;
