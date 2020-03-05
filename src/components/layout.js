import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

export const COLORS = {
  PRIMARY: "#66FCF1",
  SECONDARY: "#C5C6C7",
  DARK_GREEN: "#45A29E",
  BLACK: "#0B0C10",
  DARK_GREY: "#1F2833",
  // LIGHT_GREY: "#C5C6C7",
  WHITE: "#FFFFFF",
}

const GlobalStyles = styled.div`
  // heading
  h1 {
    color: ${COLORS.PRIMARY};
    font-size: 28px;
    margin: 0;
  }
  // heading 2 (heading 5)
  h2 {
    color: ${COLORS.WHITE};
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    margin: 0 20px;
    padding-top: 56px;
  }
  // sub heading (greyed out)
  h3 {
    color: ${COLORS.PRIMARY};
    font-size: 18px;
  }
  // image copy
  h4 {
    color: ${COLORS.WHITE};
    font-size: 24px;
    line-height: 40px;
  }
  // logo
  h5 {
    color: ${COLORS.WHITE};
    font-size: 24px;
    line-height: 18px;
    margin: 0px;
  }
  // All Icons
  .Icon {
    color: ${COLORS.WHITE};
    width: 30px;
    height: 30px;
  }

  p.body1 {
    font-size: 16px;
    line-height: 24px;
    color: ${COLORS.BLACK};
    text-align: center;
    margin: 0 20px;
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
