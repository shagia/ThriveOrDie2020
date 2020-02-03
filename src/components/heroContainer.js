import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/hero.scss"

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
        <div className="head-title-social">
          <h1>{data.site.siteMetadata.title}</h1>
          <nav className="social-bar">
            {/* will need to iterate through available socials, max ? */}
            <ul>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
