import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"
import HeroInterviewContainer from "../components/heroInterviewContainer"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <HeroInterviewContainer
        postHeadImg={post.frontmatter.artwork}
        postTitle={post.frontmatter.title}
      >
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </HeroInterviewContainer>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        artwork
        tags
      }
    }
  }
`
