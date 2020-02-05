import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
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
        allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
          nodes {
            parent {
              ... on File {
                childMarkdownRemark {
                  frontmatter {
                    date
                    title
                    artists
                  }
                  rawMarkdownBody
                  html
                }
              }
            }
          }
        }
      }
    `
  )
  console.log(data)
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
          <nav className="social-bar nav-hor">
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
        <div className="head-bio">
          <small>~~latest release~~</small>
          <br></br>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.allMarkdownRemark.nodes[0].parent.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </div>
  )
}
