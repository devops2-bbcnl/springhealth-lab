/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable image optimization with Netlify
    loader: 'default',
    domains: [], // Add any external domains if you're using external images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    // Disable static image optimization as we're using Netlify's image optimization
    unoptimized: false,
  },
  // Disable static exports as we're using server-side rendering
  // output: 'export',
  
  // Enable React's experimental features
  experimental: {
    appDir: true,
    serverActions: true,
    // Enable server components
    serverComponents: true,
    // Enable external directory for Netlify functions
    externalDir: true,
  },
  // Configure webpack to handle Netlify functions
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    if (isServer) {
      // This ensures that server-side code can use __dirname
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Don't bundle fs module
        path: false, // Don't bundle path module
      };
    }
    return config;
  },
};

module.exports = nextConfig;
