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
      `gatsby-plugin-material-ui`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
      {
        resolve: "gatsby-plugin-anchor-links",
        options: {
          offset: -100
        }
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // The property ID; the tracking code won't be generated without it
          trackingId: "G-MN8HEB9YQM",
          // Defines where to place the tracking script - `true` in the head and `false` in the body
          head: false,
          // Setting this parameter is optional
          anonymize: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Delays sending pageview hits on route update (in milliseconds)
          pageTransitionDelay: 0,
          // Defers execution of google analytics script after page load
          defer: false,
          // Any additional optional fields
          sampleRate: 5,
          siteSpeedSampleRate: 10,
          cookieDomain: "tayloruchytil.com",
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
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
        ],
      },
    },
    ],
  }
