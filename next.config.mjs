/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.gstatic.com',
            port: '',
          },
        ],
        formats: ['image/avif', 'image/webp'],
      },
};

export default nextConfig;
