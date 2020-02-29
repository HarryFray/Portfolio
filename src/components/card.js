import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Chips from "./chips"

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100vw;
  height: 100vw;

  @media (min-width: 450px) {
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
    rgba(0, 0, 0, 0.3) 2rem,
    rgba(0, 0, 0, 0.7)
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

const Card = ({ title, subTitle, backgroundimage, slug, tech }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        images: edges {
          image: node {
            fluid {
              originalName
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  /* TODO: currently pulling in all images for each image this should
   be elevated to parent */
  const img = backgroundimage.split("/").reverse()[0]
  const getImage = img => {
    return allImageSharp.images.filter(
      ({ image }) => image.fluid.originalName === img
    )[0]
  }

  return (
    <StyledBackgroundImage fluid={getImage(img).image.fluid} fadeIn="soft">
      <Link to={slug} style={{ textDecoration: "none" }}>
        <TextBox>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </TextBox>
      </Link>
      <Chips tech={tech} />
    </StyledBackgroundImage>
  )
}

export default Card
