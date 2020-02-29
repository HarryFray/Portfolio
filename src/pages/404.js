import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "@emotion/core"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div
      css={css`
        width: 100vw;
        padding-top: 150px;
        text-align: center;
        height: 300px;
        background-color: white;
      `}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
