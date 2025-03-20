import type { NextConfig } from 'next';
const stylexPlugin = require("@stylexjs/nextjs-plugin");

module.exports = stylexPlugin({
  rootDir: __dirname,
})({});

const s3Host = process.env.S3_HOST as string;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    formats:  ["image/avif", "image/webp"],
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: s3Host,
        pathname: "/**"
      }
    ]
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
    }
    return config;
  },
};

export default nextConfig;