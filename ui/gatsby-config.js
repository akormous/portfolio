module.exports = {
  siteMetadata: {
    title: `Akshat Chauhan`,
    author: {
      name: `Akshat Chauhan`,
      summary: `who lives and works in India and likes to solve problems`,
    },
    image: `/preview.png`,
    description: `Hi, I am Akshat :)`,
    siteUrl: `https://akormous.netlify.app`,
    social: {
      twitter: `akormous`,
    },
  
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
