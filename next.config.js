/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external domains if you're using external images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    disableStaticImages: false,
  },
  // Enable static exports for Netlify
  output: 'export',
  // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  // Enable React's experimental features if needed
  experimental: {
    appDir: true,
    serverActions: true,
  },
  // Add any other configurations you might need
};

module.exports = nextConfig;
