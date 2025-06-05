module.exports = {
  images: {
    domains: [
      `${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com`,
      's3.amazonaws.com',
    ],

    unoptimized: true,

    // or for newer Next.js versions:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.s3.amazonaws.com',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mdx$/,
      use: '@mdx-js/loader',
    })
    return config
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  trailingSlash: true,
}
