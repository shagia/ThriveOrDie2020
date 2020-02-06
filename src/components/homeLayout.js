import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import HeroContainer from "./heroContainer"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"

export default ({ children }) => {
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
        <HeroContainer></HeroContainer>
      </div>
      {children}
    </div>
  )
}
