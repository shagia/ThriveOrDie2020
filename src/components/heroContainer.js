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
        allFile(
          filter: { relativeDirectory: { eq: "data/releases" } }
          sort: {
            order: DESC
            fields: childMarkdownRemark___frontmatter___date
          }
          limit: 1
        ) {
          edges {
            node {
              childMarkdownRemark {
                html
                frontmatter {
                  artists
                  artwork
                  date
                  title
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
              __html: data.allFile.edges[0].node.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </div>
  )
}
