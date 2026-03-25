import type { NextConfig } from "next";

if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
