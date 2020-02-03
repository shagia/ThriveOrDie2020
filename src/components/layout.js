import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "../components/heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"

export default ({ children }) => {
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
    <div className="master-container">
      <div>
        <HeroContainer></HeroContainer>
      </div>
      <br />
      {children}
    </div>
  )
}
