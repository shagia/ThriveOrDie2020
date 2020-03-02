import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/global.scss"
import "../styles/timelineitem.scss"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return <div>.</div>
}
