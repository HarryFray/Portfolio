import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"

const Logo = styled(({ className }) => {
  return (
    <Link to="/" className={className}>
      <h5>Nicholas</h5>
      <h5 className="Harry">Harry</h5>
      <h5 className="Fray">Fray</h5>
    </Link>
  )
})`
  top: 3vw;
  text-decoration: none;
  mix-blend-mode: difference;
  position: fixed;
  color: white;
  left: 20px;

  .Harry {
    margin-left: 18px;
  }
  .Fray {
    margin-left: 30px;
  }

  @media (min-width: 700px) {
    .Harry {
      margin-left: 26px;
    }
    .Fray {
      margin-left: 43px;
    }
  }
`

export default Logo
