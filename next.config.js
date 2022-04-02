const path = require('path')

const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./next-sitemap')
    }
    return config
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer(nextConfig)
