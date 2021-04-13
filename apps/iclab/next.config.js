// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx')

module.exports = withNx({
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      // about
      {
        source: '/de/about-us',
        destination: '/de/uber-uns',
        locale: false,
      },
      {
        source: '/en/uber-uns',
        destination: '/en/about-us',
        locale: false,
      },
      // contact
      {
        source: '/de/contact',
        destination: '/de/kontakt',
        locale: false,
      },
      {
        source: '/en/kontakt',
        destination: '/en/contact',
        locale: false,
      },
    ]
  },
})
