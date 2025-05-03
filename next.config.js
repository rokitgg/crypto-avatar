// @ts-check
 
/** @type {import('next').NextConfig} */

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: '/api/avatar/:path*',
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                hostname: 'cryptopunks.app',
            },
        ],
    },
};

module.exports = nextConfig
