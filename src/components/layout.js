import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "../components/heroContainer"
import "../styles/layout.scss"

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

      <Link to={`/about/`}>About</Link>
      <br />
      {children}
    </div>
  )
}
