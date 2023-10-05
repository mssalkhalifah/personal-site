/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: process.env.IMAGE_PROTOCOL,
        hostname: process.env.hostname,
        port: process.env.IMAGE_PORT,
        pathname: process.env.IMAGE_PATHNAME,
      },
    ],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
