/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: `taylor uchytil`,
    },
    plugins: [
      `gatsby-plugin-emotion`,
      `gatsby-plugin-material-ui`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `gallery`,
          path: `${__dirname}/src/gallery/`,
        },
      },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: 'https://gmail.us10.list-manage.com/subscribe/post?u=1f844c287b5f30899127e2566&amp;id=64e7a569e3', // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-image`,
      `gatsby-transformer-yaml`,
    ],
  }
