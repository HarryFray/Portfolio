import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

const GlobalStyles = styled.div`
  // heading
  h1 {
    font-size: 28px;
    margin: 0;
  }
  // sub heading
  h2 {
    font-size: 12px;
  }
  // sub heading (greyed out)
  h3 {
    opacity: 0.7;
    font-size: 18px;
  }
  // image copy
  h4 {
    font-size: 24px;
    line-height: 40px;
  }
  // logo
  h5 {
    font-size: 24px;
    line-height: 18px;
    margin: 0px;
  }
  // All Icons
  .Icon {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 450px) {
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
