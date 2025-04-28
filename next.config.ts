import dotenv from "dotenv";
import type { NextConfig } from "next";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.ibb.co",
      },
    ],
  },
  env: {
    CREATOR_BASE_URL: process.env.CREATOR_BASE_URL,
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "node:child_process": "child_process",
    };
    return config;
  },
};

export default nextConfig;
