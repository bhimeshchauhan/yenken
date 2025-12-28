/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  reactStrictMode: true,

  compiler: {
    styledComponents: true
  },

  images: {
    unoptimized: true
  },

  basePath: isGithubPages ? '/yenken' : '',
  assetPrefix: isGithubPages ? '/yenken/' : ''
};

module.exports = nextConfig;
