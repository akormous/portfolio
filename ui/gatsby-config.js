module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ui",
  },
  plugins: [{
    resolve: `gatsby-theme-material-ui`,
    options: {
      google: {
        families: ['Droid Sans', 'Droid Serif']
      }
    },
  },
            
],
};
