/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/madaq-aljouf',
  assetPrefix: '/madaq-aljouf/',
  trailingSlash: true,
}

module.exports = nextConfig
