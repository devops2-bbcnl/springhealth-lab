/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Next.js image optimization, let Netlify handle it
  },
};

module.exports = nextConfig;