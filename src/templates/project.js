import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

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
        <div className="Hero">
          <h2>{subTitle}</h2>
        </div>
        <Img className="Image" fluid={data.file.childImageSharp.fluid} />
        <div className="Copy">
          <p className="body1" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <div className="Footer"></div>
      </div>
    </Layout>
  )
})`
  position: absolute;
  top: 12vh;
  z-index: 1;
  .Hero {
    background-color: #1f2833;
    height: 280px;
  }

  .Image {
    margin: 20px;
    width: calc(100vw - 40px);
    top: -120px;
    overflow: hidden;
  }

  .Copy {
    background-color: white;
  }

  .Footer {
    height: 200px;
    background-color: #1f2833;
  }
`
export default Project
