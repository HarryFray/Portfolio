import React from "react"
import styled from "styled-components"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
// import { animateScroll as scroll } from "react-scroll"
import Default from "../components/default"
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
const ProjectBase = ({ data, className }) => {
  //   const handleScroll = () => {
  //     scroll.scrollToBottom()
  //   }
  console.log("NICKS LOVELY DATA: ", data)
  return <div>testing</div>
  const {
    title,
    slug,
    subTitle,
    backgroundimage,
  } = data.markdownRemark.frontmatter

  return (
    <div className={className}>
      {/* <BackgroundImage> */}
      {/* <Default projectId={projectId} /> */}
      <p>{title}</p>
      <div className="ScrollCTA">
        <ArrowDownwardIcon className="Icon" />
        <h3>Scroll Down</h3>
      </div>
      {/* </BackgroundImage> */}
    </div>
  )
}

const Project = styled(ProjectBase)`
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
