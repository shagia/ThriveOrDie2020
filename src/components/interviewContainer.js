import React from "react"
import "../styles/interviewContainer.scss"

const InterviewContainer = ({ interviewData }) => {
  console.log(interviewData)
  return (
    <div className="interview-layout">
      {interviewData.map(({ node }) => (
        <div className="interview-item" key={node.id}>
          <a className="interview-anchor">
            <div className="interview-overlay">
              <div>{node.frontmatter.artists}</div>
              <div>{node.frontmatter.title}</div>
            </div>
            <div>
              <img
                alt="Release art"
                className="interview-art-src"
                src={node.frontmatter.artwork}
              ></img>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
export default InterviewContainer
