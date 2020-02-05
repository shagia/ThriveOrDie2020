import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import HeaderMenu from "../components/headerMenu"

export default ({ data }) => (
  <div className="master-container">
    <HeaderMenu></HeaderMenu>
    {/* consider using two layouts at this point */}
    <HomeLayout>
      <div>Hello world!</div>
    </HomeLayout>
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
