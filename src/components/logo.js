import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = styled(({ className }) => {
  return (
    <Link to="/" className={className}>
      <h5>Nicholas</h5>
      <h5 className="Harry">Harry</h5>
      <h5 className="Fray">Fray</h5>
    </Link>
  )
})`
  z-index: 100;
  top: 3vw;
  text-decoration: none;
  position: fixed;
  left: 20px;

  .Harry {
    margin-left: 18px;
  }
  .Fray {
    margin-left: 30px;
  }

  @media (min-width: 450px) {
    .Harry {
      margin-left: 26px;
    }
    .Fray {
      margin-left: 43px;
    }
  }
`

export default Logo
