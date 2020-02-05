import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import HeaderMenu from "../components/headerMenu"
import TimelineItem from "../components/timelineItem"

export default ({ data }) => (
  <div className="master-container">
    <HeaderMenu></HeaderMenu>
    {/* consider using two layouts at this point */}
    <HomeLayout>
      <div>Hello world!</div>
      <TimelineItem></TimelineItem>
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
