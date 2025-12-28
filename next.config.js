const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,

  images: {
    unoptimized: true
  },

  basePath: isGithubPages ? '/yenken' : '',
  assetPrefix: isGithubPages ? '/yenken/' : ''
};

module.exports = nextConfig;
