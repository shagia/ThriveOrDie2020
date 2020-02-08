import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"

const markDown = text => {
  if (text) {
    //Here I replace special chars for html tags, this is the example: __ Text in bold __
    return text.replace(/__(.*?)__((_+|\W+|$))/g, "<strong>$1</strong>$2")
  }
}

const Hero = props => {
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
          <h1>
            {props.artistObj //if the artist object exists, render its title otherwise default title
              ? props.artistObj.frontmatter.title
              : "THRIVE OR DIE"}
          </h1>
          <nav className="social-bar nav-hor">
            {/* will need to iterate through available socials, max ? */}
            {/* <ul>
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
            </ul> */}
          </nav>
        </div>
        {props.artistObj ? (
          <div className="head-bio">
            <div>{props.artistObj.rawMarkdownBody}</div>
          </div>
        ) : (
          // Here's the data! sigh
          <div>
            <small>~~latest release~~</small>
            <br></br>
            <div
              dangerouslySetInnerHTML={{
                __html: props.headRelease.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
//props.site.siteMetadata.title
/* dangerouslySetInnerHTML={{
            __html: props.allFile.edges[0].node.childMarkdownRemark.html,
          }} */
