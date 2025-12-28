const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,

  images: {
    unoptimized: true
  },

  basePath: isGithubPages ? '/yenken' : '',
  assetPrefix: isGithubPages ? '/yenken/' : ''
};

module.exports = nextConfig;
