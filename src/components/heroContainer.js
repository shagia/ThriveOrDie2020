import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"

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
    <div className="hero-container">
      <div className="hero-img-container">
        <img
          alt="Replace me!"
          className="hero-img-src"
          src="https://picsum.photos/1200"
        ></img>
      </div>
      <div className="hero-detail-container">
        <h1>{data.site.siteMetadata.title}</h1>
      </div>
    </div>
  )
}
