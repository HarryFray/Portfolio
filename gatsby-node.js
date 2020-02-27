exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
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
    actions.createPage({
      path: project.node.frontmatter.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        slug: `${project.node.frontmatter.slug}`,
      },
    })
  })
}
