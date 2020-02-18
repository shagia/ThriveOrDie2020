import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"

const InterviewHeader = ({ children, postHeadImg, postTitle }) => {
  console.log(postHeadImg)
  return (
    <div className="">
      <div className="hero-container-no-flex">
        <div className="hero-img-container">
          <img src={postHeadImg} className="hero-img-src-interview"></img>
        </div>
        <div className="hero-detail-container">
          <div className="head-title-social">
            <h1>{postTitle}</h1>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default InterviewHeader
