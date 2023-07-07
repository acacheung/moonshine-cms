import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const Articles = ({ articles }) => (
  <main>
    <ul className="press__list">
      {articles.map(article => (
        article.image ? (
          <li key={v4()} className="press__item--featured">
            <img src={article.image.childImageSharp.fluid.src} className='press__image' alt='' />
            <div className='press__padding'>
              <h2 className="press__heading">
                {article.publication}: {article.title}
                <span className="press__date t-medium-gray"> ({article.date})</span>
              </h2>
              <p className="t-text">
                {article.summary} <a className="t-link has-arrow t-gold" href={article.link}>See full article</a>
              </p>
            </div>
          </li>
        ) : (
          <li key={v4()} className="press__item">
            <h2 className="press__heading">
              {article.publication}: {article.title}
              <span className="press__date t-medium-gray"> ({article.date})</span>
            </h2>
            <p className="t-text">
              {article.summary} <a className="t-link has-arrow t-gold" href={article.link}>See full article</a>
            </p>
          </li>
        )
      ))}
    </ul>
  </main>
)

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      publication: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      summary: PropTypes.string,
      link: PropTypes.string,
    })
  ),
}

export default Articles
