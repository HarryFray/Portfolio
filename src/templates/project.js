import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { Link } from "@reach/router"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"

export const query = graphql`
  query($slug: String!, $img: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subTitle
        client
        timeline
        primaryRole
        contributers
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
    allMarkdownRemark {
      allProjects: nodes {
        frontmatter {
          title
          subTitle
          slug
        }
      }
    }
  }
`
const Project = styled(({ data, className }) => {
  const [imageHeight, setImageHeight] = useState(0)
  const [nextProject, setNextProject] = useState({ slug: "" })
  const imageRef = useRef(null)

  const { html, frontmatter } = data.markdownRemark
  const {
    title,
    subTitle,
    client,
    timeline,
    primaryRole,
    contributers,
  } = frontmatter // add typical new feilds here
  const { allProjects } = data.allMarkdownRemark

  // chooses next viewable project
  useEffect(() => {
    for (let i = 0; i < allProjects.length; i++) {
      if (i === allProjects.length - 1) {
        setNextProject(allProjects[0].frontmatter)
        return
      } else if (allProjects[i].frontmatter.title === title) {
        setNextProject(allProjects[i + 1].frontmatter)
        return
      }
    }
  }, [allProjects, title])

  // gets image height to ensure copy apears in correct location
  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight)
    }
  }, [imageRef])

  return (
    <Layout>
      <SEO title={title} description={`${subTitle} ${title}`} />
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
          <p className="subtitle2">
            <strong>Client: </strong>
            {client}
          </p>
          <p className="subtitle2">
            <strong>Timeline: </strong> {timeline}
          </p>
          <p className="subtitle2">
            <strong>Primary Role: </strong> {primaryRole}
          </p>
          <p className="subtitle2">
            <strong>Contributers: </strong> {contributers}
          </p>
          <h6>Overview</h6>
          <p className="body1" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="Footer">
            <p className="subtitle1 Primary-text">{nextProject.title}</p>
            <h5 className="White-text">{nextProject.subTitle}</h5>
            <Link className="AboutMe" to={nextProject.slug}>
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
    background-color: #1f2833;
    border-radius: 4px;
    margin-top: 36px;
    h5 {
      margin: 20px 0;
    }
    p {
      margin-top: 10px;
    }
  }

  .AboutMe {
    display: block;
    text-decoration: none;
    display: flex;
  }
`
export default Project
