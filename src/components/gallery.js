import React from "react"
import styled from "styled-components"
import MobileMenu from "./mobileMenu"
import Card from "./card"

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

const Wrapper = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
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
