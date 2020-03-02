import React from "react"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"

const homeLayout = ({ children, homeData }) => {
  const head = homeData.node //Passing through the passedthrough home data variable
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer headRelease={head}></HeroContainer>
      </div>
      {children}
    </div>
  )
}

export default homeLayout
