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

export default nextConfig;
