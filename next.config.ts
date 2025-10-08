import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site for GitHub Pages
  output: "export",
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
    };
    return config;
  },
};

export default nextConfig;
