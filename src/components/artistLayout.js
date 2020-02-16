import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"
import ReleaseContainer from "../components/releaseContainer"

export default ({ data }) => {
  const post = data.artistsJson
  const postImg = data.allFile.edges[0].node.childImageSharp
  const releaseData = data.allReleasesJson.edges
  //console.log(post)
  console.log(postImg)
  console.log(releaseData)
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer artistImg={postImg} artistObj={post}></HeroContainer>
      </div>
      <div className="releases-container">
        <h3>RELEASES</h3>
        <ReleaseContainer releasesData={releaseData} />
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
    allReleasesJson(
      sort: { order: DESC, fields: date }
      filter: { tags: { eq: $slug } }
    ) {
      edges {
        node {
          artwork
          title
          artists
          date(formatString: "YYYY")
          id
        }
      }
    }
  }
`
