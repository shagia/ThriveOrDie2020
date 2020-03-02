import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"

const InterviewHeader = ({ children, postHeadImg, postTitle }) => {
  //console.log(postHeadImg)
  return (
    <div className="">
      <div className="hero-container-no-flex">
        <div className="hero-img-container">
          <img
            alt="Placeholder"
            src={postHeadImg}
            className="hero-img-src-interview"
          ></img>
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
