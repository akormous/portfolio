module.exports = {
  siteMetadata: {
    siteUrl: "https://akormous.netlify.app",
    title: "Akshat Chauhan",
    
    
    titleTemplate: "%s · The Real Hero",
    description:
      "Programmer, Engineer, Gamer",
    url: "https://akormous.netlify.app", // No trailing slash allowed!
    image: "/preview.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@occlumency",
    
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
