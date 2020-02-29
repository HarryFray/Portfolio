import React from "react"
import styled from "styled-components"
import Card from "./card"

const Gallery = styled(({ projects, className }) => {
  return (
    <div className={className}>
      {projects.map(project => (
        <Card key={project.frontmatter.slug} {...project.frontmatter} />
      ))}
    </div>
  )
})`
  display: block;
  z-index: 5;
  position: absolute;
  margin-top: 40vh;
  @media (min-width: 450px) {
    margin-top: 0px;
    width: 100vh;
    height: 100vw;
    left: -100vh;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: auto;
    transform: rotate(-90deg);
    transform-origin: right top;
  }
`

export default Gallery
