import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/onderhoud/reparaties/',
        destination: '/auto-reparatie-cuijk/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
