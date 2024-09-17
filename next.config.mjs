/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'img.clerk.com', // Allow images from Clerk
        }, ],
    },
    experimental: {
        runtime: 'experimental-edge', // Enable edge functions
    },
    env: {
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY, // Access environment variables
    },
};

export default nextConfig;