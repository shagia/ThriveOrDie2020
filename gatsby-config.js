/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `THRIVE OR DIE`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "THRIVE OR DIE",
        defaultSiteImage: "/static/logo.png",
        siteUrl: "https://todmg.club/",
        twitterCreator: "@TODMGMGMG",
        twitterSite: "@TODMGMGMG",
        htmlLanguage: "en",
        locale: "en_US",
        appleTouch: "../static/favicon.ico",
        favicon32: "../static/favicon.ico",
        favicon16: "../static/favicon.ico",
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://example.com/#website",
            "url": "https://example.com/",
            "name": "THRIVE OR DIE",
            "publisher": {
              "@id": "https://example.com/about/#organization"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "https://example.com/#logo",
              "url": "https://example.com/img/logo.png",
              "caption": "THRIVE OR DIE"
            }
          }`,
      },
    },
  ],
}
