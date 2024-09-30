/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
              pathname: '/products/**', // You can adjust the pathname based on your image structure
            },
          ],
        domains: ['cdn.dummyjson.com'], // Add the external image domain here
      },
};

export default nextConfig;
