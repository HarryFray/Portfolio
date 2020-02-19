import React, { useEffect } from "react"
import { Link } from "gatsby"
import Home from "../components/home"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    if (window.screen.width > 700) {
      document.body.style.overflow = "hidden"
    }
    document.body.style.margin = 0
    document.body.style.fontFamily = "sans-serif"
    document.body.style.fontFamily = "Asap"
  })

  return (
    <Layout>
      <SEO title="Home" />
      <Home path="/" />

      {/* <Project path="project/:projectId" /> */}
    </Layout>
  )
}

export default IndexPage
