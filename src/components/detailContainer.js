import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"

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

  return (
    <div className="hero-detail-container">
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}
