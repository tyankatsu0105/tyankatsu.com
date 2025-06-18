import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://images.ctfassets.net/pmz8kro2rz74/**")],
  },
};

export default nextConfig;
