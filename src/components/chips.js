import React from "react"
import styled from "styled-components"
import { Chip } from "@material-ui/core"

const Chips = styled(({ className, tech }) => {
  return (
    <div className={className}>
      {tech &&
        tech.split(",").map(tech => {
          return (
            <Chip
              size="small"
              className="Chip"
              label={<p className="body2 Black-text">{tech}</p>}
              key={tech}
            />
          )
        })}
    </div>
  )
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  position: absolute;
  z-index: 10;
  margin: 8px;
  bottom: 0;
  .Chip {
    background-color: #66fcf1;
    color: #1f2833;
    padding: 2px;
    margin: 4px;
  }
`

export default Chips
