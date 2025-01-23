import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@packages/ui'],
};

module.exports = nextConfig;
