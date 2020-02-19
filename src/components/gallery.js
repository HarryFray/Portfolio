import React from "react"
import styled from "styled-components"
import MobileMenu from "./mobileMenu"
// import MerlinPic from "../assets/img_merlin.jpeg"
// import HSPic from "../assets/img_hs.jpeg"
// import LiveDraftPic from "../assets/img_nfl.jpeg"
// import AcuuStorm from "../assets/img_srorm.jpeg"
// import Rex from "../assets/img_rex.jpeg"
import Card from "./card"

export const PROJECTS = [
  {
    title: "Kansas City Reality",
    slug: "kansas-city-reality",
    link: "https://www.bhhskcrealty.com/",
    description: "All in one site for purchasing homes in KC",
    // img: MerlinPic,
    key: 0,
  },
  {
    title: "Merlin CMS",
    slug: "merlin-cms",
    link: "https://merlinlabs.gg/",
    description: "Content managment system for home brokerages",
    // img: HSPic,
    key: 1,
  },
  {
    title: "Live Draft X",
    slug: "live-draft-x",
    description: "Fantasy football draft taking place on a single machine",
    // img: LiveDraftPic,
    key: 2,
  },
  {
    title: "AccuStorm",
    slug: "accustorm",
    description: "Visualize hail storms over property data",
    // img: AcuuStorm,
    key: 3,
  },
  {
    title: "REX",
    slug: "rex",
    description: "Recommendation tracking for songs, books, and food",
    // img: Rex,
    key: 4,
  },
]

const Wrapper = styled.div`
  margin-top: 50vh;
  left: -50vh;
  position: absolute;
  .todo {
    margin-top: 20px;
    ::-webkit-scrollbar {
      display: none;
    }
    width: 50vh;
    height: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg);
    transform-origin: right top;
  }
`

const Gallery = () => {
  return (
    <>
      <Wrapper>
        <div className="todo">
          {PROJECTS.map(item => {
            return <Card {...item} />
          })}
        </div>
      </Wrapper>
      <MobileMenu list={PROJECTS} />
    </>
  )
}

export default Gallery
