/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript build errors (only use if necessary)
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'img.clerk.com', // Allow external images from Clerk
        }, ],
    },
    // Enable edge functions
    experimental: {
        runtime: 'experimental-edge', // This configures the app to use Vercel's Edge Functions
    },
    // Ensure environment variables are passed into the build
    env: {
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY, // Ensure that Clerk secret key is accessible
    },
};

module.exports = nextConfig;