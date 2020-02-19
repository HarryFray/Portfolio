import React from "react"
import styled from "styled-components"
import Gallery from "./gallery"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "@reach/router"

const HomeBase = ({ className }) => {
  return (
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
      <Gallery />
    </div>
  )
}

const Home = styled(HomeBase)`
  div {
    box-sizing: border-box;
  }

  .top {
    background-color: white;
    height: 40vh;
    width: 100vw;
    padding-left: 50px;
    position: absolute;
    z-index: 5;
  }

  .SubHeading {
    .AboutMe {
      margin: 12px;
      @media (min-width: 700px) {
        margin-top: 100px;
      }
      text-decoration: none;
      color: black;
      display: flex;
      align-items: center;
    }
    position: absolute;
    top: 12vh;
    @media (min-width: 700px) {
      top: 18vh;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`
export default Home
