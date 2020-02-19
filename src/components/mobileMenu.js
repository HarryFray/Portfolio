import React from "react"
import styled from "styled-components"
import Card from "./card"

const MobileMenu = styled(({ list, className }) => {
  return (
    <div className={className}>
      {list.map(project => {
        return <Card {...project} />
      })}
    </div>
  )
})`
  z-index: 5;
  position: absolute;
  width: 100vw;
  margin-top: 40vh;
  @media (min-width: 700px) {
    display: none;
  }
`

export default MobileMenu
