import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
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

  return (
    <div className="item-container">
      <div className="img-container">
        <img
          src="https://picsum.photos/1200"
          alt="timeline img"
          className="img-fluid img-tl-lg"
        ></img>
      </div>
      <div className="item-article">
        <h2>ARTIST - TITLE</h2>
      </div>
    </div>
  )
}
