import React from "react"
import { Helmet } from 'react-helmet'
import logo from "../../static/logo.png"

const seoComponent = props => {
    let pageTitle = props.page + " • THRIVE OR DIE"
    let isArtistPage = props.isArtistPage
    let seoPic = isArtistPage === true ? props.artistImg.src : logo 
    let makeURL = rawURL => {
        if (isArtistPage === true){
            return "https://todmg.club/" + props.artistObj.tags[0]
        } else if (isArtistPage === false) {
            return "https://todmg.club/" + pageTitle
        } else if (props.page == "Home") {
            return "https://todmg.club/"
        }
    }
    return (
        <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle}/>
        <meta name="description" content="NO COMPROMISE."/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={makeURL}/>
        <meta property="og:title" content={pageTitle}/>
        <meta property="og:description" content="NO COMPROMISE."/>
        <meta property="og:image" content={seoPic}/>

  
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={makeURL}/>
        <meta property="twitter:title" content={pageTitle}/>
        <meta property="twitter:description" content="NO COMPROMISE."/>
        <meta property="twitter:image" content={seoPic}/>

      </Helmet>
    )
  }
  
  export default seoComponent