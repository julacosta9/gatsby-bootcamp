import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Feel free to contact me at{" "}
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          julian.acosta@email.com
        </a>
        .
      </p>
    </Layout>
  )
}

export default Contact
