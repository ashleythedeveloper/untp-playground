import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: '/untp-playground',
    
    images: {
      path: '/untp-playground/_next/image',
    },
  
    trailingSlash: true,
   
}

export default nextConfig;
