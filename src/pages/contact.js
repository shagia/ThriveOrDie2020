import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/contactLayout"
import "../styles/contact.scss"
import SeoComponent from "../components/seoComponent"

export default ({ data }) => (
  <div>
    <SeoComponent isArtistPage={false} page="Contact" />
    <Layout>
      <h3>Contact</h3>
      <div>You can send us general inqueries, booking, demos, or just any random thoughts you have in mind. If you're sending demos, <b>please</b> submit under these guidelines:
      <ul>
          <li>
            We take <b>original</b> singles, EPs, and albums, <b>no uncleared samples</b>
          </li>
          <li>
            Name should be your artist name, Subject should be the song, EP or Album title, so when submitted your entry will look like: <b>Artist Name - Subject Title</b>
          </li>
          <li>
            Streaming platforms (Soundcloud, clyp.it, Mediafire, An untitled mp3 off of a russian server, etc) only, needs to be downloadable
        </li>
          <li>
            Songs need to be <b>finished</b>, Premastered mixdowns are fine
        </li>
          <li>
            MP3s (constantly 320kbps), WAVs, AIFFs only
        </li>
          <li>
            Leave a note about yourself and your song(s) you're sending! Tell us the best things about you and your songs...confidence
        </li>
        </ul>
      </div>
      <div className="contact-container">
        <form method="post" action="https://getform.io/f/621a28b5-638c-47ce-8b2c-46374d81bdef">
          <label>
            <div>Name</div>
            <input type="text" name="name" id="name" required />
          </label>
          <label>
            <div>Email</div>
            <input type="email" name="email" id="email" required />
          </label>
          <label>
            <div>Subject</div>
            <input type="text" name="subject" id="subject" required />
          </label>
          <label>
            <div>Message</div>
            <textarea name="message" id="message" rows="5" required />
          </label><br></br>
          <input className="clear-input tod-button-black" type="reset" value="Clear" />
          <div className="contact-controls"><button className="tod-button-black" type="submit">Send</button>

          </div>
        </form>
      </div>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
