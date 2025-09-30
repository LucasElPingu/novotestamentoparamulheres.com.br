import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.builder.io"],
    // allow remote images to be optimized by next/image
  },
};

export default nextConfig;
