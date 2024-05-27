/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  trailingSlash: true,
  output: {
    export: true,
  }
};

export default nextConfig;
