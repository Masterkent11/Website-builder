/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
