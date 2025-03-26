import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/blog",
        permanent: true,
      },
      // Wildcard path matching
    ];
  },
};

export default nextConfig;
