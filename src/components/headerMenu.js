import React from "react"
import "../styles/menu.scss"
import "../styles/global.scss"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <header className="site-head">
        <div className="nav-flex-container">
          <nav className="nav-hor head-bar">
            <ul>
              <li>
                <div className="logo-container">
                  <Link to={`/`}>LOGO</Link>
                </div>
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
          </nav>
          <div className="load">LOADING</div>
        </div>
      </header>
    </div>
  )
}
