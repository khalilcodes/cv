require('dotenv').config()
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Khalil Ali`,
    subTitle: `Resume`,
    description: `online resume...`,
    author: `@khalill`,
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: `${process.env.GOOGLE_SPREADSHEET_ID}`,
        // credentials: {
        //   "client_email": `${process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL}`,
        //   "private_key": `${process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/(\\r)|(\\n)/g, '\n')}`
        // },
        credentials: JSON.parse(`${process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS}`),
        typePrefix: `Sheet`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
