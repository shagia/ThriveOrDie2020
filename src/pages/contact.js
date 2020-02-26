import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/contactLayout"

export default ({ data }) => (
  <div>
    <Layout>
      <h3>Contact</h3>
      <div>You can send us general inqueries, booking, demos, or just any random thoughts you have in mind.</div>
      <div className="contact-container">
        <form method="post" action="https://getform.io/f/621a28b5-638c-47ce-8b2c-46374d81bdef">
        <label>
          <div>Name</div>
          <input type="text" name="name" id="name" />
        </label>
        <label>
          <div>Email</div>
          <input type="email" name="email" id="email" />
        </label>
        <label>
         <div>Subject</div>
          <input type="text" name="subject" id="subject" />
        </label>
        <label>
          <div>Message</div>
          <textarea name="message" id="message" rows="5" />
        </label><br></br>
        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
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
