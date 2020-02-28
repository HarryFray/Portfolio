exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              backgroundimage
            }
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic("failed to create project: ", result.error)
  }

  const projects = result.data.allMarkdownRemark.edges

  projects.forEach(project => {
    const { backgroundimage, slug } = project.node.frontmatter
    /* TODO: currently gets image name off file path better option
    would be saving image names directly */
    const img = backgroundimage.split("/").reverse()[0]

    actions.createPage({
      path: project.node.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug,
        img,
      },
    })
  })
}
