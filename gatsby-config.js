/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Crismart',
    description: 'Description',
    author: 'Alena',
    company: 'Crismart'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
       component: require.resolve(`./src/components/layout`)
      }
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css']
      }
    }
  ]
}
