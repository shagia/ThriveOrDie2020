import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"
import { SEO } from "gatsby-plugin-seo"
import Footer from "../components/footerComponent"

const contactLayout = ({ children }) => {
  return (
    <div className="master-container">
      <SEO
        title="Contact"
        description="NO COMPROMISE"
        pagePath={"/contact/"}
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
      <div>{children}</div>
      <Footer></Footer>
    </div>
  )
}

export default contactLayout
