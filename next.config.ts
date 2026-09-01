import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      // Placeholder photography until the client's own photos arrive.
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
