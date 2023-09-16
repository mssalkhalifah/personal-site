/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.hostname}`,
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
