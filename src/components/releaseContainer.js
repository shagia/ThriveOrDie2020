import React from "react"
import "../styles/releaseContainer.scss"

const Release = ({ releasesData }) => {
  console.log(releasesData)
  return (
    <div className="releases-layout">
      {releasesData.map(({ node }) => (
        <div className="release-item" key={node.id}>
          <a className="release-anchor">
            <div className="release-overlay">
              <div className="overlay-content">
                <div>{node.artists}</div>
                <div>{node.title}</div>
              </div>
            </div>
            <div>
              <img
                alt="Release art"
                className="release-art-src"
                src={node.artwork}
              ></img>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
export default Release
