/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.twitter.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.linkedin.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
