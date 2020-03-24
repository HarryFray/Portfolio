import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const Resume = styled(({ className }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "resume_img.png" }) {
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
      <SEO title="Nicholas Fray Resume" description="2020 resume" />
      <div className={className}>
        <Img fluid={image.childImageSharp.fluid} />
      </div>
      <dvi className="Mobile" />
    </Layout>
  )
})`
  background-color: #1f2833;
  padding: 80px 20px 0 20px;
  height: 100vh;
`
export default Resume
