import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Faqs from '../components/Faqs'

export const FaqsPageTemplate = ({
  questions,
}) => (
  <div>
    <h1 className="t-hidden">FAQs</h1>
    <Faqs questions={questions} />
  </div>
)

FaqsPageTemplate.propTypes = {
  questions: PropTypes.array,
}

const FaqsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Navbar />
      <FaqsPageTemplate
        questions={frontmatter.questions}
      />
      <Footer />
    </Layout>
  )
}

FaqsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FaqsPage

export const faqsPageQuery = graphql`
  query FaqsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        questions {
          question
          answer
        }
      }
    }
  }
`
