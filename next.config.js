/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,

  compiler: {
    styledComponents: true
  },

  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
