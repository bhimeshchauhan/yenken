const repoName = 'yenken';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true
  },

  trailingSlash: true,

  compiler: {
    styledComponents: true
  }
};

module.exports = nextConfig;
