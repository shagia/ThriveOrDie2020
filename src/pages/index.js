import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import TimelineItem from "../components/timelineItem"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {/* consider using two layouts at this point */}
      <HomeLayout homeData={data.allFile.edges[0]}>
        {" "}
        {/* gotta send the front page data */}
        <small
          style={{ padding: "1rem", textAlign: "center", display: "block" }}
        >
          THRIVE
        </small>
        <TimelineItem></TimelineItem>
        <div>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </HomeLayout>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: { relativeDirectory: { eq: "data/releases" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
      limit: 1
    ) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              artists
              artwork
              title
            }
          }
        }
      }
    }
  }
`
