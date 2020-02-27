import React from "react"
import styled from "styled-components"
import Gallery from "./gallery"
import ArrowForwardIcon from "@material-ui/icons/ArrowForward"
import { Link } from "@reach/router"

export const PROJECTS = [
  {
    title: "Kansas City Reality",
    slug: "kansas-city-reality",
    link: "https://www.bhhskcrealty.com/",
    description: "All in one site for purchasing homes in KC",
    img: "img_merlin.jpeg",
    key: 0,
  },
  {
    title: "Merlin CMS",
    slug: "merlin-cms",
    link: "https://merlinlabs.gg/",
    description: "Content managment system for home brokerages",
    img: "img_hs.jpeg",
    key: 1,
  },
  {
    title: "Live Draft X",
    slug: "live-draft-x",
    description: "Fantasy football draft taking place on a single machine",
    img: "img_nfl.jpeg",
    key: 2,
  },
  {
    title: "AccuStorm",
    slug: "accustorm",
    description: "Visualize hail storms over property data",
    img: "img_srorm.jpeg",
    key: 3,
  },
  {
    title: "REX",
    slug: "rex",
    description: "Recommendation tracking for songs, books, and food",
    img: "img_rex.jpeg",
    key: 4,
  },
]

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
      <Gallery projects={PROJECTS} />
    </div>
  )
}

const Home = styled(HomeBase)`
  a {
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }

  .top {
    background-color: white;
    height: 40vh;
    width: 100vw;
    padding-left: 20px;
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
