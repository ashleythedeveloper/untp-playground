import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/untp-playground',
    assetPrefix: '/untp-playground',
    
    images: {
      path: '/untp-playground/_next/image',
    },
  
    trailingSlash: false,
   
}

export default nextConfig;
