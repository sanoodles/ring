// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

module.exports = withNx({
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: '/api/saas/:slug*',
        destination: `https://test-search-admin.infocentric.swiss/api/:slug*`,
      },
    ]
  },
})
