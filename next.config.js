const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Imports
    i18n,

    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/guild',
                destination: 'https://muzyk0.notion.site/84a114923faf4cb286756e8cb6abca23',
                permanent: false
            },
            {
                source: '/gild',
                destination: 'https://muzyk0.notion.site/84a114923faf4cb286756e8cb6abca23',
                permanent: false
            }
        ];
    },
}

module.exports = nextConfig
