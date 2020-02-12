const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `ArtistsJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages/artists` })
    createNodeField({
      node,
      name: `slug`,
      value: slug.substring(1, slug.length - 1),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // this returns a promise, dont worry
  const { createPage } = actions
  const result = await graphql(`
    query {
      allArtistsJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allArtistsJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/artistLayout.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  console.log(JSON.stringify(result, null, 4))
}
