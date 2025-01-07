/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    appDir: true, // Enable this if you're using the `app` directory
  },
};

export default nextConfig;
