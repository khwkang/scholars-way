import React from 'react'
import PropTypes from 'prop-types'
import {Container, PageTitle} from '../components/general.styled.js'
import {Expertise} from '../components/clinic/Expertise'

const ClinicExpertisePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark
  const title = page.title
  const specialties = page.specialties
  const expertise = page.expertise

  return (
    <Container>
      <PageTitle>
        {title}
      </PageTitle>
      <Expertise specialties={specialties} expertise={expertise} />
    </Container>
  )
}

ClinicExpertisePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClinicExpertisePage

export const ClinicExpertisePageQuery = graphql`
  query ClinicExpertisePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        specialties
        expertise
      }
    }
  }
`
