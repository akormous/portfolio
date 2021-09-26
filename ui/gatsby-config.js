module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ui",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
};
