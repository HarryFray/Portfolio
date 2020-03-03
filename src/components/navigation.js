import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link, globalHistory } from "@reach/router"
import Logo from "./logo.js"
import { animateScroll as scroll } from "react-scroll"
import MenuIcon from "@material-ui/icons/Menu"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import YouTubeIcon from "@material-ui/icons/YouTube"
import MessageIcon from "@material-ui/icons/Message"
import { css } from "@emotion/core"

const Wrapper = styled.div`
  .navOpen {
    background-color: #1F2833;
    overflow-y: hidden;    
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);

    height: 60vh;
    max-height: 60vh; /* approximate max height */
    @media (min-width: 450px) {
      height: 50vh;
      max-height: 50vh; /* approximate max height */
    }
  }

  .navClosed {
    background-color: #1F2833;
    height: 12vh;
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0, 1, 1, 1);
    max-height: 12vh;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {

      padding: 8px 0;
      color: white;
    }
  }
    color: white;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .SocialIcons a > * {
    margin: 4px 14px 0 0;
  }

  .Content {
    display: flex;
    padding: 12vh 0 0 24px;
    justify-content: space-between;
    @media (min-width: 450px) {
      justify-content: space-around;
    }

  }
`

const HeaderVisible = styled.div`
  position: fixed;
  z-index: 10;
  height: 12vh;
  width: 100vw;
  .MenuIcon {
    top: 2vw;
    right: 8vw;
    position: fixed;
    color: white;
  }
`

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    globalHistory.listen(({ action }) => {
      if (action === "PUSH") {
        setNavOpen(false)
      }
    })
  })

  return (
    <>
      <HeaderVisible
        css={css`
          background-color: ${!true ? "#45a29e" : "#1F2833"};
        `}
      >
        <Logo />
        <MenuIcon
          className="MenuIcon Icon"
          onClick={() => {
            // scroll.scrollToTop()
            setNavOpen(!navOpen)
          }}
        />
      </HeaderVisible>
      <Wrapper>
        <div className={navOpen ? "navOpen" : "navClosed"}>
          <div className="Content">
            <div>
              <ul>
                <li>
                  <Link to="about-me">
                    <h1>About Me</h1>
                  </Link>
                </li>
                <li>
                  <Link to="404">
                    <h1>Approach</h1>
                  </Link>
                </li>
                <li>
                  <Link to="404">
                    <h1>Design</h1>
                  </Link>
                </li>
                <li>
                  <Link to="404">
                    <h1>The Code</h1>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <div className="SocialIcons">
                <a
                  href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="Icon" />
                </a>
                <a
                  href="https://github.com/HarryFray"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="Icon" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=jxtqnUSgzrI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon className="Icon" />
                </a>
                <a
                  href="https://medium.com/@harry.fray7/regular-expressions-with-javascript-an-introduction-2142fc01db14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageIcon className="Icon" />
                </a>
              </div>
              <h2>Email: harry.fray7@gmail.com</h2>
              <h2>Phone: (660) 888-9796</h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Header
