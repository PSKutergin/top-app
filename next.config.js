/** @type {import('next').NextConfig} */
module.exports = {
    webpack(config) {
        config.module.rules.push({
            use: ['@svgr/webpack'],
            test: /\.svg$/,
        });

        return config;
    },
};
