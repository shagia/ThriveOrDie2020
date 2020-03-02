import React from "react"
import "../styles/layout.scss"
import "../styles/global.scss"
import HeaderMenu from "../components/headerMenu"

const contactLayout = ({ children }) => {
  return (
    <div className="master-container">
      <HeaderMenu></HeaderMenu>
      <div>
      {children}
      </div>
    </div>
  )
}

export default contactLayout
