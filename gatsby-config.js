module.exports = {
  siteMetadata: {
    title: "Max King's personal website",
    description: "Hey there! If you're looking for inspiration or to grab content feel free to use anything here.",
    author: `Max King`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
      {
       resolve: 'gatsby-plugin-eslint',
       options: {
         test: /\.js$|\.jsx$/,
         exclude: /(node_modules|.cache|public)/,
         stages: ['develop'],
         options: {
           emitWarning: true,
           failOnError: false
         }
       }
     },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.ico'
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
