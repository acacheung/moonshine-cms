import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class MenuSubgroupNav extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <nav className="menu__links l-col">
        {posts &&
          posts.map(({ node: post }) => (
            <Link to={post.fields.slug} key={post.id} className="menu__link" activeClassName="is-active">
              <img alt="moon-icon" className="menu__link__icon" src="/img/moon.png" />
              <div>
                <p className="menu__link__title">{post.frontmatter.title}</p>
                <p className="menu__link__subtitle">{post.frontmatter.subtitle}</p>
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
                subtitle
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
