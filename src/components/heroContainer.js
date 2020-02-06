import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"

const Hero = props => (
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
        <h1>{props.artistName ? props.artistName : "THRIVE OR DIE"}</h1>
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
        <div />
      </div>
    </div>
  </div>
)

export default Hero
//props.site.siteMetadata.title
/* dangerouslySetInnerHTML={{
            __html: props.allFile.edges[0].node.childMarkdownRemark.html,
          }} */
