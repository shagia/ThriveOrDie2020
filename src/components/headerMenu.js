import React from "react"
import "../styles/menu.scss"
import "../styles/global.scss"
import { Link } from "gatsby"
import logo from "../../static/logo.png"

export default () => {
  return (
    <div>
      <header className="site-head">
        <nav className="nav-flex-container nav-hor head-bar">
          <ul className="nav-items">
            <li className="logo-container">
              <Link to={`/`}>
                <img className="logo-img-src" src={logo}></img>
              </Link>
            </li>
            <li>
              <Link to={`/`}>HOME</Link>
            </li>
            <li>
              <Link to={`/artists/`}>ARTISTS</Link>
            </li>
            <li>
              <Link to={`/contact/`}>CONTACT</Link>
            </li>
          </ul>
          <div className="load">LOADING</div>
        </nav>
      </header>
    </div>
  )
}
