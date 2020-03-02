import React from "react"
import { Link } from "gatsby"
import "../styles/interviewContainer.scss"
import "../styles/global.scss"
import failureIcon from "../../static/failure-icon.svg"

const InterviewContainer = ({ interviewData }) => {
  //console.log(interviewData)
  return (
    <div className="interview-layout">
      {!interviewData.length == 0 ? (
        interviewData.map(({ node }) => (
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
        ))
      ) : (
        <div className="no-entries-container">
          <img
            alt="Nothin' here to find..."
            className="no-entries-src"
            height="200rem"
            src={failureIcon}
          ></img>
        </div>
      )}
    </div>
  )
}
export default InterviewContainer
