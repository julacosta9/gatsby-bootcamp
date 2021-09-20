import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Blog",
      url: "/blog",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ]

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          {navItems.map((item, index) => (
          <li key={index}>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to={item.url}
            >
              {item.name}
            </Link>
          </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
