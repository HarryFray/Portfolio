import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import Navigation from "./navigation"

const GlobalStyles = styled.div`
  // heading
  h1 {
    sfont-size: 72px;
    margin: 0;
  }
  // sub heading
  h2 {
    font-size: 36px;
  }
  // sub heading (greyed out)
  h3 {
    opacity: 0.7;
    font-size: 48px;
  }
  // image copy
  h4 {
    font-size: 72px;
    line-height: 120px;
  }
  // logo
  h5 {
    font-size: 54px;
    line-height: 40px;
    margin: 0px;
  }
  // All Icons
  .Icon {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 700px) {
    // heading
    h1 {
      font-size: 36px;
      margin: 0;
    }
    // sub heading
    h2 {
      font-size: 18px;
    }
    // sub heading (greyed out)
    h3 {
      font-size: 24px;
    }
    // image copy
    h4 {
      font-size: 36px;
      line-height: 60px;
    }
    // logo
    h5 {
      font-size: 36px;
      line-height: 26px;
      margin: 0px;
    }
    // All Icons
    .Icon {
      width: 40px;
      height: 40px;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <GlobalStyles>
      <Navigation />
      <main>{children}</main>
    </GlobalStyles>
  )
}

export default Layout
