module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ui",
  },
  plugins: [
    `gatsby-plugin-top-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'AC', 
        start_url: '/',
        
        display: 'standalone',
        icon: 'src/images/favicon.ico',
      }
    },
    `gatsby-plugin-material-ui`,
  ],
};
