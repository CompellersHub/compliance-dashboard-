import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  /* Disable lint checking */
  eslint: {
      ignoreDuringBuilds:true
  },
};

export default nextConfig;
