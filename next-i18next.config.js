module.exports = {
    i18n: {
        defaultLocale: 'ru',
        locales: ['en', 'ru'],
    },

    /** To avoid issues when deploying to some paas (vercel...) */
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./src/public/locales')
            : './src/locales',

    reloadOnPrerender: process.env.NODE_ENV === 'development',
}