import React from "react"
import styled from "styled-components"
import Gallery from "./gallery"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

const Home = styled(({ className }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            subTitle
            backgroundimage
            slug
            tech
            externalLink
          }
        }
      }
    }
  `)

  return (
    <>
      <Link
        css={css`
          position: fixed;
          top: 30vh;
          left: 3vw;
          z-index: 30;
          display: flex;
          align-items: center;
          padding: 20px;
          text-decoration: none;
          color: black;
          @media (max-width: 450px) {
            display: none;
          }
        `}
        to="about-me"
      >
        <h2>More about me</h2>
        <ArrowForwardIcon className="Icon" />
      </Link>
      <div className={className}>
        <div className="top">
          <div className="SubHeading">
            <h1>
              Enjoy the process of
              <br />
              creating, get real results.
            </h1>
            <Link className="AboutMe" to="about-me">
              <h2>More about me</h2>
              <ArrowForwardIcon className="Icon" />
            </Link>
          </div>
        </div>
        <Gallery projects={allMarkdownRemark.nodes} />
      </div>
    </>
  )
})`
  a {
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }

  .top {
    background-color: #45a29e;
    height: 50vh;
    width: 100vw;
    padding-left: 20px;
    position: absolute;
    z-index: 5;
  }

  .SubHeading {
    .AboutMe {
      display: block;
      margin: 12px;
      @media (min-width: 450px) {
        display: none;
        margin-top: 100px;
      }
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
    }
    position: absolute;
    top: 12vh;
    @media (min-width: 450px) {
      top: 18vh;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`
export default Home
