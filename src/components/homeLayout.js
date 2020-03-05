import React from "react"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"
import Footer from "../components/footerComponent"
import SeoComponent from "../components/seoComponent"

const homeLayout = ({ children, homeData }) => {
  const head = homeData.node //Passing through the passedthrough home data variable
  return (
    <div className="master-container">
      <SeoComponent isArtistPage={false} page="Home" />
      
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer headRelease={head}/>
      </div>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default homeLayout
