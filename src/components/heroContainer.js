import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"
import { FaEnvelope, FaTwitter, FaSoundcloud } from "react-icons/fa"
//may need to make a socials component soon

let makeSocials = socialObj => {
  console.log(socialObj)
  return (
    <ul>
      {socialObj.email ? (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"mailto:" + socialObj.email}
          >
            <FaEnvelope />
          </a>
        </li>
      ) : (
        ""
      )}{" "}
      {socialObj.twitter ? (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://twitter.com/" + socialObj.twitter}
          >
            <FaTwitter />
          </a>
        </li>
      ) : (
        ""
      )}{" "}
      {socialObj.soundcloud ? (
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={"https://soundcloud.com/" + socialObj.soundcloud}
          >
            <FaSoundcloud />
          </a>
        </li>
      ) : (
        ""
      )}
    </ul>
  )
}

const Hero = props => {
  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img
          alt="Replace me!"
          className="hero-img-src"
          src={
            props.artistObj
              ? props.artistObj.artwork
              : props.headRelease.childMarkdownRemark.frontmatter.artwork
          }
        ></img>
      </div>
      <div className="hero-detail-container">
        <div className="head-title-social">
          <h1>
            {props.artistObj //if the artist object exists, render its title otherwise default title
              ? props.artistObj.title
              : "THRIVE OR DIE"}
          </h1>
          {props.artistObj ? (
            <nav className="social-bar nav-hor">
              {makeSocials(props.artistObj.socials)}
            </nav>
          ) : (
            <h3
              dangerouslySetInnerHTML={{
                __html: `${props.headRelease.childMarkdownRemark.frontmatter.artists} - ${props.headRelease.childMarkdownRemark.frontmatter.title}`,
              }}
            ></h3>
          )}
        </div>
        {props.artistObj ? (
          <div className="head-bio">
            <h3>BIO</h3>
            <div>{props.artistObj.bio}</div>
          </div>
        ) : (
          // Here's the data! sigh
          <div className="head-bio">
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
