import React from "react"
import { Link } from "gatsby"

const Home = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <h2>I'm Julian, a developer living in San Diego, CA.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </div>
  )
}

export default Home
