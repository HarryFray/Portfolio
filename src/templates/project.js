import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export const x = graphql`
  query($slug: String!, $img: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subTitle
        tech
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
const Project = styled(({ data, className }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, subTitle, tech } = frontmatter

  return (
    <Layout>
      <SEO title={title} description={`${subTitle} ${title} ${tech}`} />
      <div className={className}>
        <div className="Section">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <h3
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <BackgroundImage
          className="Image"
          fluid={data.file.childImageSharp.fluid}
        ></BackgroundImage>
      </div>
    </Layout>
  )
})`
  .Section {
    padding-top: 80px;
    height: 60vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
  }
  .Image {
    height: 40vh;
    left: 0;
    width: 100vw;
    bottom: 0;
    position: fixed !important;
  }

  h1,
  h2 {
    text-align: center;
  }

  h3 {
    margin: 0 16px;
    line-height: 32px;
    text-align: center;
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
