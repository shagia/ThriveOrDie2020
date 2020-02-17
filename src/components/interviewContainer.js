import React from "react"
import { Link } from "gatsby"
import "../styles/interviewContainer.scss"

const InterviewContainer = ({ interviewData }) => {
  console.log(interviewData)
  return (
    <div className="interview-layout">
      {interviewData.map(({ node }) => (
        <div className="interview-item" key={node.id}>
          <Link to={node.fields.slug} className="interview-anchor">
            <div className="interview-overlay">
              <div className="overlay-content">{node.frontmatter.title}</div>
            </div>
            <div>
              <img
                alt="Release art"
                className="interview-art-src"
                src={node.frontmatter.artwork}
              ></img>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default InterviewContainer
