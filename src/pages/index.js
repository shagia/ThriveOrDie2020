import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <div>
    <Layout>
      <div>Hello world!</div>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
