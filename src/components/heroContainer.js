import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/layout.scss"
import "../styles/global.scss"
import "../styles/hero.scss"

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className="hero-container">
      <div className="hero-img-container">
        <img
          alt="Replace me!"
          className="hero-img-src"
          src="https://picsum.photos/1200"
        ></img>
      </div>
      <div className="hero-detail-container">
        <div className="head-title-social">
          <h1>{data.site.siteMetadata.title}</h1>
          <nav className="social-bar nav-hor">
            {/* will need to iterate through available socials, max ? */}
            <ul>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
              <li>
                <a href>Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="head-bio">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit! Aenean
          commodo ligula eget dolor. Aenean massa; Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus! Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem; Nulla
          consequat massa quis enim; Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu? In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo!
        </div>
      </div>
    </div>
  )
}
