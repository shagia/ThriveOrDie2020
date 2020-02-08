import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"

export default ({ children, data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer artistObj={post}></HeroContainer>
      </div>
      {children}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      rawMarkdownBody
      frontmatter {
        title
        tags
        social_twitter
        social_soundcloud
        hometown
        contact
        artwork
      }
    }
  }
`
