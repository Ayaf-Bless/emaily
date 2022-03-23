/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/auth/google",
        destination: "http://localhost:5000/auth/google", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
