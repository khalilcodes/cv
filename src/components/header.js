import PropTypes from "prop-types"
import React from "react"

import download from '../images/download.svg'
import styles from '../styles/header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1>
        &#123; {siteTitle} &#125;
      </h1>
      <h1>
        <a href={process.env.GOOGLE_DOCS_PDF_ID}>
          download
          <img src={download} alt="->" />
        </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
