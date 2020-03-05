import React from "react"
import { Link, graphql } from "gatsby"
import HeaderMenu from "../components/headerMenu"
import "../styles/releaseContainer.scss"
import "../styles/layout.scss"
import "../styles/global.scss"
import SeoComponent from "../components/seoComponent"
import Footer from "../components/footerComponent"

export default ({ data }) => {
  //console.log(data)
  return (
    <div className="master-container">
      <SeoComponent isArtistPage={false} page="Artists" />
      <HeaderMenu></HeaderMenu>
      <h3>Artists</h3>
      {/* reusing the release art css for this */}
      <div className="releases-layout">
        {data.allArtistsJson.edges.map(({ node }) => (
          <div className="release-item" key={node.id}>
            <Link to={node.fields.slug} className="release-anchor">
              <div>
                <img
                  alt="Artist pic"
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
      <Footer></Footer>
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
