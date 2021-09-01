import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Julian, a developer living in San Diego, CA.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default Home
