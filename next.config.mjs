/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',       // Static HTML export - works on any web host
  trailingSlash: true,    // Ensures /page/ works correctly on Apache
  images: {
    unoptimized: true,    // Required for static export (no image server)
  },
};

export default nextConfig;
