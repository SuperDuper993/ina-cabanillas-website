/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.inacabanillas.com',
  generateRobotsTxt: true,
  exclude: ['/hvordan-lede-genz', '/hvordan-lede-genz/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/hvordan-lede-genz/'],
      },
    ],
    additionalSitemaps: [
      'https://www.inacabanillas.com/sitemap.xml',
    ],
  },
}
