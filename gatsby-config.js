module.exports = {
  siteMetadata: {
    title: "Gatsby Bootcamp!",
    author: "Julian Acosta",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
