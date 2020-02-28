import React from "react"
import styled from "styled-components"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
// import { animateScroll as scroll } from "react-scroll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const x = graphql`
  query($slug: String!, $img: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        subTitle
        backgroundimage
      }
    }
    file(relativePath: { eq: $img }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

/* reach router puts the url query on react props!!! */
const Project = styled(({ data, className }) => {
  //   const handleScroll = () => {
  //     scroll.scrollToBottom()
  //   }

  const { title, slug, subTitle } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <BackgroundImage fluid={data.file.childImageSharp.fluid}>
        <p>{title}</p>
        <div className="ScrollCTA">
          <ArrowDownwardIcon className="Icon" />
          <h3>Scroll Down</h3>
        </div>
      </BackgroundImage>
    </Layout>
  )
})`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: fixed;

  ${BackgroundImage} {
    height: 100vh;
  }

  .ScrollCTA {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100vw;
    align-items: center;
    margin: 20px;
    flex-direction: column-reverse;
    h3 {
      margin: 0;
    }
  }
`
export default Project
