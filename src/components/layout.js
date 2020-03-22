import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"

export const COLORS = {
  PRIMARY: "#66FCF1",
  SECONDARY: "#C5C6C7",
  DARK_GREEN: "#45A29E",
  BLACK: "#0B0C10",
  DARK_GREY: "#1F2833",
  LIGHT_GREY: "#C5C6C7",
  WHITE: "#FFFFFF",
}

const GlobalColors = styled.div`
  .Primary-text {
    color: ${COLORS.PRIMARY};
  }
  .Secondary-text {
    color: ${COLORS.SECONDARY};
  }
  .DarkGreen-text {
    color: ${COLORS.DARK_GREEN};
  }
  .Black-text {
    color: ${COLORS.BLACK};
  }
  .DarkGrey-text {
    color: ${COLORS.DARK_GREY};
  }
  .LightGrey-text {
    color: ${COLORS.LIGHT_GREY};
  }
  .White-text {
    color: ${COLORS.WHITE};
  }
  .Primary-background {
    background: ${COLORS.PRIMARY};
  }
  .Secondary-background {
    background: ${COLORS.SECONDARY};
  }
  .DarkGreen-background {
    background: ${COLORS.DARK_GREEN};
  }
  .Black-background {
    background: ${COLORS.BLACK};
  }
  .DarkGrey-background {
    background: ${COLORS.DARK_GREY};
  }
  .LightGrey-background {
    background: ${COLORS.LIGHT_GREY};
  }
  .White-background {
    background: ${COLORS.WHITE};
  }
`

const GlobalTypography = styled.div`
  // HEADING 1
  h1 {
    font-size: 96px;
    line-height: 120px;
    letter-spacing: -1.5px;
  }
  // HEADING 2
  h2 {
    font-size: 60px;
    line-height: 74px;
    letter-spacing: -0.5px;
  }
  // HEADING 3
  h3 {
    font-size: 48px;
    line-height: 60px;
  }
  // HEADING 4
  h4 {
    font-size: 34px;
    line-height: 42px;
  }
  // HEADING 5
  h5 {
    font-size: 24px;
    line-height: 30px;
  }
  // HEADING 6
  h6 {
    font-size: 20px;
    line-height: 25px;
    letter-spacing: 0.15px;
  }
  // BODY 1
  p.body1 {
    font-size: 16px;
    line-height: 24px;
  }
  // BODY 2
  p.body2 {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
  }
  // SUBTITLE 1
  p.subtitle1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
  }
  // SUBTITLE 2
  p.subtitle2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }
  // BUTTON
  button {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  // OVERLINE
  p.overline {
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`

const Layout = ({ children }) => {
  return (
    <GlobalTypography>
      <GlobalColors>
        <Navigation />
        <main>{children}</main>
      </GlobalColors>
    </GlobalTypography>
  )
}

export default Layout
