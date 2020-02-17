import React from "react"
import { Link, graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"
import TimelineItem from "../components/timelineItem"

export default ({ data, i }) => {
  console.log(data)
  return (
    <div>
      {/* consider using two layouts at this point */}
      <HomeLayout homeData={data.allReleasesJson.edges[0]}>
        {" "}
        {/* gotta send the front page data */}
        <small
          style={{ padding: "1rem", textAlign: "center", display: "block" }}
        >
          THRIVE
        </small>
        <TimelineItem></TimelineItem>
        <div>
          {data.allReleasesJson.edges.slice(1).map(({ node }) => (
            <div key={node.id[i]}>test</div>
          ))}
        </div>
      </HomeLayout>
    </div>
  )
}

export const query = graphql`
  query {
    allReleasesJson(sort: { order: DESC, fields: date }, filter: {}) {
      edges {
        node {
          artwork
          title
          artists
          date(formatString: "YYYY")
          id
          desc
        }
      }
    }
  }
`
