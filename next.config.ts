import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/untp-playground',
  
  trailingSlash: false,
  
  assetPrefix: '/untp-playground',
  
  async rewrites() {
    return [
      {
        source: '/untp-playground/untp-playground/:path*',
        destination: '/untp-playground/:path*',
      }
    ];
  },
  
  async redirects() {
    return [
      {
        source: '/untp-playground/untp-playground/:path*',
        destination: '/untp-playground/:path*',
        permanent: true,
      }
    ];
  }
};

export default nextConfig;