module.exports = {
  siteMetadata: {
    title: 'Akshat Chauhan',
    description:
      'Engineer, Programmer',
    siteUrl: 'https://akormous.netlify.app', // No trailing slash allowed!
    image: '/preview.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@akormous',
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
