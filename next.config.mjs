/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "valleys.co.nz",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
