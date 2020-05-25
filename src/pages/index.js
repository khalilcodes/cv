import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/home.module.scss"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Khalil Ali" />
      <div className={styles.container}>

        {/* WEBLINKS */}

        <p className={styles.webInfo}>
          {data.allSheetWebLinks.nodes.map(items => (
            <React.Fragment key={items.id}>
              <span>
                {data.allFile.nodes.map(el =>
                  el.name === items.image ? (
                    <img src={el.publicURL} alt={items.alt} key={el.id} />
                  ) : null
                )}
                <a href={items.link} target="_blank" rel="noopener noreferrer">
                  {items.name}
                </a>
              </span>
              {items.sheetId === data.allSheetWebLinks.nodes.length ? null : (
                <span className={styles.vline}>|</span>
              )}
            </React.Fragment>
          ))}
        </p>

        {/* CONTACT AND LOCATION */}

        <p className={styles.contactInfo}>
          <span>{data.sheetHeaders.contact}</span>
          <span>|</span>
          <span>{data.sheetHeaders.location}</span>
        </p>

        {/* TITLE */}
        <h1 className={styles.title}>
          <span>{data.sheetHeaders.name}</span>
        </h1>

        {/* PROFILE */}

        <h1>
          <span>{data.sheetHeaders.profile}</span>
          <hr />
        </h1>

        <ul>
          {data.allSheetProfileList.nodes.map(item => (
            <li className={styles.profileItems} key={item.id}>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>

        {/* EDUCATION */}

        <h1>
          <span>{data.sheetHeaders.education}</span>
          <hr />
        </h1>

        {data.allSheetEducationList.nodes.map(item => (
          <React.Fragment key={item.id}>
            <h2 className={styles.mobileTitle}>
              <span>{item.title}&nbsp;</span>
              <span className={styles.italic}>—&nbsp;{item.year}</span>
            </h2>
            <p>
              <span>{item.subtitle}</span>
            </p>
          </React.Fragment>
        ))}

        {/* RELEVANT TECHNICAL SKILLS */}

        <h1>
          <span>{data.sheetHeaders.techSkills}</span>
          <hr />
        </h1>

        <div className={styles.tableWrapper}>
          {data.allSheetTechSkills.nodes.map((items, i) => (
            <div key={items.id} style={{order:i}} className={styles.tableCell}>{items.firstColumn}</div>
          ))}
          {data.allSheetTechSkills.nodes.map((items, i) => (
            <div key={items.id} style={{order:i}} className={styles.tableCell}>{items.secondColumn}</div>
          ))}
        </div>

        {/* EXPERIENCE */}

        <h1>
          <span>{data.sheetHeaders.experience}</span>
          <hr />
        </h1>

        {data.allSheetExperience.nodes.map(items => (
          <React.Fragment key={items.id}>
            <h2 className={styles.mobileTitle}>
              <span>{items.company}&nbsp;</span>
              <span className={styles.italic}>—&nbsp;{items.position}</span>
            </h2>
            <p>
              <span>{items.year}</span>
            </p>

            {/* WORK DESCRIPTION */}

            <ul className={styles.expListStyle}>
              {data.allSheetWorkList.nodes.map(el =>
                el.ref !== null && el.ref === items.ref ? (
                  <li key={el.id} className={styles.expItems}>
                    <span>{el.work}</span>
                  </li>
                ) : null
              )}
            </ul>
          </React.Fragment>
        ))}

        {/* SOFT SKILLS */}

        <h1>
          <span>{data.sheetHeaders.softSkills}</span>
          <hr />
        </h1>

        <ul className={styles.skillsListStyle}>
          {data.allSheetSoftSkills.nodes.map(items => (
            <li key={items.id}>
              <span>{items.skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    ...CvData
  }
`
