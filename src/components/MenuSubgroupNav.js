import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import moon from '../img/moon.svg';


class MenuSubgroupNav extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <nav className="menu__links l-col">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id} className="menu__link" activeClassName="is-active">
              {post.frontmatter.title}
              <img className='menu__logo' src={moon} alt='Moonshine 152 logo' />
              <div>
                <p className="menu__link__desc">To Get Ya Started</p>
              </div>
            </Link>
          ))}
      </nav>
    )
  }
}

MenuSubgroupNav.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query MenuSubgroupNavQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "menu-group" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                order
                templateKey
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <MenuSubgroupNav data={data} count={count} />}
  />
)
