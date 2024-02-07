/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    optimizeFonts: false,
    webpack: (config, { dev, isServer }) => {
        config.optimization.minimize = false;
        return config;
    },
};

export default nextConfig;
