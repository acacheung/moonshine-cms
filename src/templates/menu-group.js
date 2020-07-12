import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import FeaturesBanner from '../components/FeaturesBanner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Subgroups from '../components/Subgroups';
import MenuSubgroupNav from '../components/MenuSubgroupNav';

export const FeaturesBannerTemplate = ({ featuresBanner }) => (
  <FeaturesBanner featuresBanner={featuresBanner} />
);

export const MenuGroupTemplate = ({ subgroups }) => (
  <Subgroups subgroups={subgroups} />
);

const MenuGroup = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Navbar />
      <div className='l-auto'>
        <MenuSubgroupNav />
        <div className='menu__lists-wrap l-colspan'>
          <FeaturesBannerTemplate featuresBanner={frontmatter.featuresBanner} />
          <MenuGroupTemplate subgroups={frontmatter.subgroups} />
        </div>
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
        featuresBanner {
          title
          features {
            title
            img
            alt
            description
          }
        }
        subgroups {
          title
          description
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
