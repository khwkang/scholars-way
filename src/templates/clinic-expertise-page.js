import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ClinicExpertisePageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  
  return (
    <section id="" className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-9 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ClinicExpertisePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ClinicExpertisePage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <ClinicExpertisePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
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
      }
    }
  }
`
