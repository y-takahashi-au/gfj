import type { NextConfig } from "next";
import { withIntlayer } from "next-intlayer/server";

const nextConfig: NextConfig = {
  images: {
    domains: ["strapi"],
  },
};

export default withIntlayer(nextConfig);
