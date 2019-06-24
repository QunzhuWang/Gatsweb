module.exports = {
  siteMetadata: {
    title: `DSC Global LLC`,
    description: `Keep coding and add more contents.`,
    author: `@QunzhuWang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DSC Global`,
        short_name: `DSC`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
