import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/untp-playground',
  
  trailingSlash: false,
  
  assetPrefix: '/untp-playground',
};

module.exports = {
    // ... rest of the configuration.
    basePath: '/untp-playground',
  
  trailingSlash: false,
  
  assetPrefix: '/untp-playground',
    output: "standalone",
  };

export default nextConfig;