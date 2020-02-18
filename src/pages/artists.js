import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeaderMenu from "../components/headerMenu"
import "../styles/releaseContainer.scss"
import "../styles/layout.scss"
import "../styles/global.scss"

export default ({ data }) => {
  console.log(data)
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <h3>Artists</h3>
      {/* reusing the release art css for this */}
      <div className="releases-layout">
        {data.allArtistsJson.edges.map(({ node }) => (
          <div className="release-item" key={node.id}>
            <Link to={node.fields.slug} className="release-anchor">
              <div>
                <img
                  alt="Release art"
                  className="release-art-src"
                  src={node.artwork}
                ></img>
              </div>
              <div>{node.title}</div>
            </Link>
          </div>
        ))}
      </div>
      {/* <small style={{ padding: "1rem", textAlign: "center", display: "block" }}>
        THRIVE
      </small> */}
    </div>
  )
}

export const query = graphql`
  query {
    allArtistsJson {
      edges {
        node {
          id
          fields {
            slug
          }
          artwork
          title
        }
      }
    }
  }
`
