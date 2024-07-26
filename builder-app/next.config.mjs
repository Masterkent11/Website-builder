/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API,
    CLERK_API_KEY: process.env.CLERK_API_KEY,
  },
  images: {
    domains: ["example.com"], // Replace with your domains
  },
  webpack: (config, { isServer }) => {
    // Custom Webpack configurations
    if (!isServer) {
      // Modify client-side Webpack config
    }
    return config;
  },
};

export default nextConfig;
