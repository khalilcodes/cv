import { graphql } from "gatsby"

export const query = graphql`
  fragment CvData on Query {
    allFile {
      nodes {
        name
        id
        publicURL
      }
    }
    sheetHeaders {
      id
      contact
      location
      name
      profile
      education
      techSkills
      experience
      softSkills
    }
    allSheetWebLinks {
      nodes {
        id
        sheetId
        name
        image
        link
        alt
      }
    }
    allSheetProfileList {
      nodes {
        id
        description
      }
    }
    allSheetEducationList {
      nodes {
        id
        title
        school
        year
      }
    }
    allSheetTechSkills {
      nodes {
        id
        programming
        tools
      }
    }
    allSheetExperience {
      nodes {
        id
        sheetId
        company
        position
        year
        ref
      }
    }
    allSheetWorkList {
      nodes {
        id
        ref
        work
      }
    }
    allSheetSoftSkills {
      nodes {
        id
        skill
      }
    }
  }
`