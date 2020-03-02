import React from "react"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"
import Footer from "../components/footerComponent"
import { SEO } from "gatsby-plugin-seo"

const homeLayout = ({ children, homeData }) => {
  const head = homeData.node //Passing through the passedthrough home data variable
  return (
    <div className="master-container">
      <SEO
        title="Home"
        description="NO COMPROMISE"
        pagePath="/"
        schema={`{
              "@context": "https://todmg.club/",
              "@type": "WebPage",
              "mainEntity": {
                "@type": "Organization",
                "name": "THRIVE OR DIE",
                "image": "../../static/logo.png"
              }
            }`}
      />
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer headRelease={head}></HeroContainer>
      </div>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default homeLayout
