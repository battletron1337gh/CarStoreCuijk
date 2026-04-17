import type { NextConfig } from "next";

// Configuratie voor custom domein (www.carstorecuijk.nl)
// Voor GitHub Pages gebruik: basePath: '/CarStoreCuijk', assetPrefix: '/CarStoreCuijk'
const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  // basePath en assetPrefix verwijderd voor custom domein
  // basePath: '/CarStoreCuijk',
  // assetPrefix: '/CarStoreCuijk',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
