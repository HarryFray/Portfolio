import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { Link } from "@reach/router"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

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
          sizes
          presentationHeight
        }
      }
    }
  }
`
const Project = styled(({ data, className }) => {
  const [imageHeight, setImageHeight] = useState(0)
  const { html, frontmatter } = data.markdownRemark
  const { title, subTitle, tech } = frontmatter

  const imageRef = useRef(null)
  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight)
    }
  }, [imageRef])

  return (
    <Layout>
      <SEO title={title} description={`${subTitle} ${title} ${tech}`} />
      <div className={className}>
        <div className="Hero">
          <h5 className="White-text">{subTitle}</h5>
        </div>
        <div ref={imageRef}>
          <Img className="Image" fluid={data.file.childImageSharp.fluid} />
        </div>
        <div
          className="Copy"
          css={css`
            top: calc(268px + ${imageHeight}px);
          `}
        >
          <p className="overline">Project Details</p>
          <p className="subtitle2">Client: </p>
          <p className="subtitle2">Timeline: </p>
          <p className="subtitle2">Primary Role: </p>
          <p className="subtitle2">Contributers: </p>
          <h6>Overview</h6>
          <p className="body1" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="Footer">
            <p className="subtitle1 Primary-text">Rex</p>
            <h5 className="White-text">Tracking whatever test text</h5>
            <Link className="AboutMe" to="about-me">
              <button className="Primary-text">View Project</button>
              <ArrowForwardIcon className="Primary-text" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
})`
  .Hero {
    background-color: #1f2833;
    height: 280px;
    padding-top: 88px;
    text-align: center;
    h5 {
      margin: 40px 20px 0 20px;
    }
  }

  .Image {
    margin: 20px;
    top: -150px;
  }

  .Copy {
    margin: 0 20px 20px 20px;
    position: absolute;
  }
  .subtitle2 {
    margin: 0;
  }

  h6 {
    margin: 30px 0 20px;
  }

  .Footer {
    padding: 20px;
    height: 200px;
    background-color: #1f2833;
    border-radius: 4px;
    margin-top: 36px;
  }

  .AboutMe {
    display: block;
    text-decoration: none;
    display: flex;
  }
`
export default Project
