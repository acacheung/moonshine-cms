import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Subgroups from '../components/Subgroups';
import MenuSubgroupNav from '../components/MenuSubgroupNav';

export const MenuGroupTemplate = ({ subgroups }) => (
  <div className='menu__lists-wrap l-colspan'>
    <Subgroups subgroups={subgroups} />
  </div>
);

MenuGroupTemplate.propTypes = {
  subgroups: PropTypes.arrayOf(
    PropTypes.shape({
      items: PropTypes.array,
    })
  ),
};

const MenuGroup = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Navbar />
      <div className='l-auto'>
        <MenuSubgroupNav />
        <MenuGroupTemplate subgroups={frontmatter.subgroups} />
      </div>
      <div className='callout-wrap'>
        <p className='callout'>
          “We offer seasonal menus that focus on bright, sustainable plays on
          local East Coast cuisine and street food.”
        </p>
      </div>
      <Footer />
    </Layout>
  );
};

MenuGroup.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MenuGroup;

export const menuGroupQuery = graphql`
  query MenuGroup($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        subgroups {
          title
          items {
            title
            price
            description
          }
        }
      }
    }
  }
`;
