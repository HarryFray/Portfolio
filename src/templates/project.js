import React from "react"
import styled from "styled-components"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import { animateScroll as scroll } from "react-scroll"
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
      html
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
  const handleScroll = () => {
    scroll.scrollToBottom()
  }

  const { html, frontmatter } = data.markdownRemark
  const { title, subTitle } = frontmatter

  return (
    <Layout>
      <SEO title={title} description={subTitle + title} />
      <div className={className}>
        <div className="Section">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <h5
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="ScrollCTA" onClick={handleScroll}>
            <ArrowDownwardIcon className="Icon" />
            <h3>Scroll Down</h3>
          </div>
        </div>
        <BackgroundImage
          className="Section"
          fluid={data.file.childImageSharp.fluid}
        ></BackgroundImage>
      </div>
    </Layout>
  )
})`
  .Section {
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1,
  h2 {
    text-align: center;
  }

  h5 {
    margin: 16px;
    line-height: 32px;
    li {
      padding-bottom: 8px;
    }
  }

  .ScrollCTA {
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export default Project
