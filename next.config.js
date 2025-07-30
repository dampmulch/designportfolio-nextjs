/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/designportfolio-nextjs',
  assetPrefix: '/designportfolio-nextjs',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig