import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Logo = styled(({ className }) => {
  return (
    <Link to="/" className={className}>
      <p className="White-text">Nicholas</p>
      <p className="White-text Harry">Harry</p>
      <p className="White-text Fray">Fray</p>
    </Link>
  )
})`
  z-index: 100;
  top: 3vw;
  text-decoration: none;
  position: fixed;
  left: 20px;
  line-height: 0.8;
  p {
    margin: 0;
  }
  .Harry {
    margin-left: 12px;
  }
  .Fray {
    margin-left: 19px;
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
