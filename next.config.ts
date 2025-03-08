import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
