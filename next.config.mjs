/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Match all API routes
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" }, // Allow requests from all origins (not recommended for production)
        ],
      },
    ];
  },
};

export default nextConfig;
