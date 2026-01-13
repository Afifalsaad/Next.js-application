/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
