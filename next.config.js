/** @type {import('next').NextConfig} */
const repoName = 'yenken';

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true
  },

  // REQUIRED for GitHub Pages (project repo)
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  images: {
    unoptimized: true
  },

  trailingSlash: true
};

module.exports = nextConfig;
