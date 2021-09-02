import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import * as homeStyles from "./index.module.scss"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className={homeStyles.welcome}>
        <div className={homeStyles.hero}>
          <p>
            Hello! <span className={homeStyles.hand}>👋🏽</span>
          </p>
          <h1>I'm Julian,</h1>
          <h2>a front-end engineer from San Diego.</h2>
        </div>
        <div className={homeStyles.info}>
          <p>
            This page is built with{" "}
            <Link to="https://www.gatsbyjs.com/" target="_blank">
              Gatsby
            </Link>{" "}
            and{" "}
            <Link to="https://www.contentful.com/" target="_blank">
              Contentful
            </Link>
            . The posts in the blog are created in the Contentful CMS and the
            site is deployed on{" "}
            <Link to="https://www.netlify.com/" target="_blank">
              Netlify
            </Link>
            .
          </p>
          <p>
            Thanks for visting and please{" "}
            <Link to="https://www.julianacosta.dev/" target="_blank">
              reach out
            </Link>{" "}
            to me with any questions!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
