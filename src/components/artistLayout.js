import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"

export default ({ data }) => {
  const post = data.artistsJson
  const postImg = data.allFile.edges[0].node.childImageSharp
  //console.log(post)
  console.log(postImg)
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer artistImg={postImg} artistObj={post}></HeroContainer>
      </div>
      <div className="releases-container">
        <h3>RELEASES</h3>
        <div className="releases-layout">
          <a className="release-anchor">
            <div className="release-overlay">Test</div>
            <div>
              <img
                alt="Release art"
                className="release-art-src"
                src="https://picsum.photos/1200"
              ></img>
            </div>
          </a>
          <a className="release-anchor">
            <div className="release-overlay">
              <div>Teffst</div>
            </div>
            <div>
              <img
                alt="Release art"
                className="release-art-src"
                src="https://picsum.photos/1200"
              ></img>
            </div>
          </a>
        </div>
      </div>
      <div>
        <h3>FEATURES & INTERVIEWS</h3>
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    artistsJson(fields: { slug: { eq: $slug } }) {
      bio
      title
      tags
      socials {
        email
        twitter
        soundcloud
      }
      hometown
      artwork
    }
    allFile(
      filter: { name: { eq: $slug }, relativeDirectory: { eq: "artists" } }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              src
              base64
              tracedSVG
            }
          }
          name
        }
      }
    }
  }
`
