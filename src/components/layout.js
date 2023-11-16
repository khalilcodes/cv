import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          subTitle
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.subTitle} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Khalil Janvekar.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout