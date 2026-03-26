import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Exclude API routes from static export (they don't work on GitHub Pages)
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Filter out API routes
    const pathMap: { [key: string]: { page: string } } = {};
    for (const [path, config] of Object.entries(defaultPathMap)) {
      if (!path.startsWith('/api/')) {
        pathMap[path] = config as { page: string };
      }
    }
    return pathMap;
  },
};

export default nextConfig;
