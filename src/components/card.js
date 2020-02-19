import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100vw;
  height: 100vw;

  @media (min-width: 700px) {
    background-size: 50vh 50vh;
    transform: rotate(90deg);
    width: 50vh;
    height: 50vh;
    img {
      width: 50vh;
      height: auto;
    }
  }
`

const TextBox = styled("div")`
  color: white;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 2rem,
    rgba(0, 0, 0, 0.5)
  );
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: start;
  padding: 20px 0 0 28px;
  h3,
  h4 {
    text-align: left;
    margin: 20px;
  }
`

const Card = ({ title, link, description, img, slug }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "img_hs.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <StyledBackgroundImage fluid={image.sharp.fluid} fadeIn="soft">
        <TextBox>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </TextBox>
      </StyledBackgroundImage>
    </a>
  )
}

export default Card
