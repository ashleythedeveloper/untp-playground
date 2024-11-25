import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/untp-playground',
  
  trailingSlash: true,
  
  assetPrefix: '/untp-playground',
  
  images: {
    path: '/untp-playground/_next/image',
  },
  
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/untp-playground/:path*',
          destination: '/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;