import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Importante para generar archivos estáticos
  basePath: 'https://github.com/visual-ds/seminar-visualds/', // Reemplaza con el nombre de tu repositorio
  images: {
    unoptimized: true, // Necesario para exportación estática
  }
};

export default nextConfig;
