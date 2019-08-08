import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Articles from '../components/Articles'

export const PressPageTemplate = ({
  title,
  articles,
}) => (
  <div className="content">
    <h1 className="t-hidden">{title}</h1>
    <Articles articles={articles} />
  </div>
)

PressPageTemplate.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.array,
}

const PressPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PressPageTemplate
        title={frontmatter.title}
        articles={frontmatter.articles}
      />
    </Layout>
  )
}

PressPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PressPage

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        articles {
          publication
          title
          date
          summary
          link
        }
      }
    }
  }
`
