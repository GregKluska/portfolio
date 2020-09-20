module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    { resolve: `gatsby-source-filesystem`, options: { path: `./src/assets/` } },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `Lato`,
            variants: [`400`],
          },
        ],
      },
    },
  ],
};
