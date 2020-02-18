import React from "react"
import "../styles/releaseContainer.scss"
import "../styles/global.scss"

const Release = ({ releasesData }) => {
  console.log(releasesData)
  return (
    <div className="releases-layout">
      {releasesData.map(({ node }) => (
        <div className="release-item" key={node.id}>
          <div className="release-anchor">
            <div className="release-overlay">
              <div className="overlay-content">
                <div>{node.artists}</div>
                <div>{node.title}</div>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={node.link}
                  className="tod-button"
                >
                  Stream / Download
                </a>
              </div>
            </div>
            <div>
              <img
                alt="Release art"
                className="release-art-src"
                src={node.artwork}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Release
