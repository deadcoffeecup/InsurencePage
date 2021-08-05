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
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
