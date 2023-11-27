import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Faqs = ({ questions }) => (
  <main>
    <ul className="press__list">
      {questions.map(question => (
        <li key={v4()} className="press__item">
          <h2 className="press__heading">
            {question.question}
          </h2>
          <p className="t-text">
            {question.answer}
          </p>
        </li>
      ))}
    </ul>
  </main>
)

Faqs.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
    })
  ),
}

export default Faqs
