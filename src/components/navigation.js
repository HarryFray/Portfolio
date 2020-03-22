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
::-webkit-scrollbar {
  display: none;
}
  width: 100%;
  height: 0;
  position: fixed;
  z-index: 9;
  background-color: #1F2833;
  overflow-x: hidden;
  transition: 0.5s;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      padding 0;
    }
  }

  a {
    text-decoration: none;
  }
  
  .SocialIcons {
    padding: 8px 0;
  }
  .SocialIcons > * {
    margin: 4px 24px 0 0;
    .Icon {
      width: 30px;
      height: 30px;
    }
  }

  .Content {
    display: block;
    padding: 10vh 0 0 24px;
    @media (min-width: 450px) {
      justify-content: space-around;
    }
    h5 {
      padding: 14px 0;
      margin: 0;
    }
    ul:last-of-type {
      margin-bottom: 36px;
    }
  }
`

const HeaderVisible = styled.div`
  background-color: #45a29e;
  position: fixed;
  z-index: 10;
  height: 64px;
  width: 100vw;
  .MenuIcon {
    top: 2vw;
    right: 8vw;
    position: fixed;
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
      <HeaderVisible>
        <Logo />
        <MenuIcon
          className="MenuIcon White-text"
          onClick={() => setNavOpen(!navOpen)}
        />
      </HeaderVisible>
      <Wrapper
        css={css`
          height: ${navOpen ? "100%" : "0"};
        `}
      >
        <div className="Content">
          <div>
            <ul>
              <li>
                <Link to="about-me">
                  <h5 className="Primary-text">About Me</h5>
                </Link>
              </li>
              <li>
                <Link to="404">
                  <h5 className="Primary-text">Approach</h5>
                </Link>
              </li>
              <li>
                <Link to="404">
                  <h5 className="Primary-text">Design</h5>
                </Link>
              </li>
              <li>
                <Link to="404">
                  <h5 className="Primary-text">The Code</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="body2 White-text">CONTACT</p>
            <p className="subtitle1 White-text">Email: harry.fray7@gmail.com</p>
            <p className="subtitle1 White-text">Phone: (660) 888-9796</p>
            <div className="SocialIcons">
              <a
                href="https://www.linkedin.com/in/nicholas-fray-40923388/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="Primary-text Icon" />
              </a>
              <a
                href="https://github.com/HarryFray"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="Primary-text Icon" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=jxtqnUSgzrI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="Primary-text Icon" />
              </a>
              <a
                href="https://medium.com/@harry.fray7/regular-expressions-with-javascript-an-introduction-2142fc01db14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageIcon className="Primary-text Icon" />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Header
