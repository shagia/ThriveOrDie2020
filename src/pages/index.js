import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/homeLayout"

export default ({ data }) => {
  //console.log(data)
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
        <div className="releases-timeline">
          {data.allReleasesJson.edges.slice(1).map(({ node }) => (
            <div key={node.id} className="item-container">
              <div className="img-container">
                <img
                  src={node.artwork}
                  alt="timeline img"
                  className="img-tl-lg"
                ></img>
              </div>
              <div className="item-article">
                <h4>
                  {node.artists} - {node.title}
                </h4>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={node.link}
                  className="tod-button-black button-wide"
                >
                  Stream / Download
                </a>
              </div>
            </div>
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
          link
          stems
          customText
        }
      }
    }
  }
`
