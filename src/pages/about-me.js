import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutMe = styled(({ className }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Page two" />
      <div className={className}>
        <div className="Copy">
          <h3>About Me</h3>
          <h3>
            I’m a creator with a deep passion for translating user pains and
            needs into beautiful and accessible applications. I thrive in
            collaborative environments where there are challenging problems to
            be solved.
          </h3>
        </div>
        <BackgroundImage
          className="Image"
          fluid={image.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
})`
  width: 100vw;
  height: 100vh;
  background-color: #45a29e;
  position: fixed;

  .Copy {
    margin: 0 8px;
    position: absolute;
    top: 10vh;
    text-align: center;
    bottom: 8px;
  }

  .Image {
    height: 40vh;
    @media (min-width: 450px) {
      height: 50vh;
    }
    left: 0;
    width: 100vw;
    bottom: 0;
    position: fixed !important;
  }

  h3 {
    margin: 0 16px;
    line-height: 32px;
    text-align: center;
    li {
      padding-bottom: 8px;
    }
  }
`
export default AboutMe
