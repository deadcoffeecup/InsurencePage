const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: "http://www.golebiewskiub.pl",
    title: "Gołębiewski Ubezpieczenia",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};
