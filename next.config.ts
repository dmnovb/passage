import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BIBLE_API_KEY: process.env.BIBLE_API_KEY
  }
};

export default nextConfig;
