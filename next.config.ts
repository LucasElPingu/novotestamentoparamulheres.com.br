// DEPOIS (Next.js 13+)
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "exemplo.com",
      },
    ],
  },
};

module.exports = nextConfig;
