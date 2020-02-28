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

  @media (min-width: 700px) {
    height: 100vw;
    margin-top: 50vh;
    left: -50vh;
    ::-webkit-scrollbar {
      display: none;
    }
    overflow-y: auto;
    transform: rotate(-90deg);
    transform-origin: right top;
  }
`

export default Gallery
