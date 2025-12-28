/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,

  output: 'export',
  trailingSlash: true,

  compiler: {
    styledComponents: true
  },

  images: {
    unoptimized: true
  },

  // ONLY for github.io deployment
  basePath: isGithubPages ? '/yenken' : '',
  assetPrefix: isGithubPages ? '/yenken/' : ''
};

module.exports = nextConfig;
