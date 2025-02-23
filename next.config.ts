import type { NextConfig } from 'next';

const config: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME,
        port: ''
      }
    ]
  }
};

export default config;
