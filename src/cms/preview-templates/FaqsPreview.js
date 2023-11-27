import React from 'react'
import PropTypes from 'prop-types'
import { FaqsPageTemplate } from '../../templates/faqs-page'

const FaqsPreview = ({ entry }) => {
  const entryFaqs = entry.getIn(['data', 'faqs'])
  const questions = entryFaqs ? entryFaqs.toJS() : []

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap" rel="stylesheet"></link>
      <FaqsPageTemplate
        questions={questions}
      />
    </div>
  )
}

FaqsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FaqsPreview
