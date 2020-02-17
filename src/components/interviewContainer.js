import React from "react"
import { Link } from "gatsby"
import "../styles/interviewContainer.scss"
import "../styles/global.scss"

const InterviewContainer = ({ interviewData }) => {
  console.log(interviewData)
  return (
    <div className="interview-layout">
      {interviewData.map(({ node }) => (
        <div className="interview-item" key={node.id}>
          <div className="interview-anchor">
            <div className="interview-overlay">
              <div className="overlay-content">
                <div>{node.frontmatter.title}</div>
                <Link to={node.fields.slug} className="tod-button">
                  Read Interview
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="Release art"
                className="interview-art-src"
                src={node.frontmatter.artwork}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default InterviewContainer
