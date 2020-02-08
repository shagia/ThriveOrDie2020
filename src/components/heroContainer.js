import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"
import { FaEnvelope, FaTwitter, FaSoundcloud } from "react-icons/fa"

let makeSocials = socialObj => {
  console.log(socialObj)
  return (
    <ul>
      {socialObj.email ? (
        <li>
          <a target="_blank" href={"mailto:" + socialObj.email}>
            <FaEnvelope />
          </a>
        </li>
      ) : (
        ""
      )}{" "}
      {socialObj.twitter ? (
        <li>
          <a target="_blank" href={"https://twitter.com/" + socialObj.twitter}>
            <FaTwitter />
          </a>
        </li>
      ) : (
        ""
      )}{" "}
      {socialObj.soundcloud ? (
        <li>
          <a
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
          src="https://picsum.photos/1200"
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
            <div>hi</div>
          )}
        </div>
        {props.artistObj ? (
          <div className="head-bio">
            <div>{props.artistObj.bio}</div>
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
