import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMeBase = ({ className }) => {
  return (
    <Layout>
      <SEO title="Page two" />
      <div className={className}>
        <div className="Copy">
          <h3>About Me</h3>
          <h4>
            I’m a creator with a deep passion for translating user pains and
            needs into beautiful and accessible applications. I thrive in
            collaborative environments where there are challenging problems to
            be solved.
          </h4>
        </div>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const AboutMe = styled(AboutMeBase)`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  position: fixed;

  .Copy {
    position: absolute;
    top: 15vh;
    text-align: start;
    bottom: 8px;
    left: 16px;
  }
`
export default AboutMe
