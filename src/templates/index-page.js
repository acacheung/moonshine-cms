import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import logo from '../img/logo.svg';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({ banner }) => {
  return <div className='hero__desc'>{banner}</div>;
};

IndexPageTemplate.propTypes = {
  banner: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <div className='header'>
        <div className='hero'>
          <video className='video' playsInline autoPlay muted loop >
            <source src="../../img/compilation.mp4" type="video/mp4" />
          </video>
          <div className='hero-overlay'>
            <div className='hero-wrap'>
              <img className='hero__logo' src={logo} alt='Moonshine 152 logo' />
              <div className='is-hidden'>Moonshine 152</div>
              <IndexPageTemplate banner={frontmatter.banner} />
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        banner
      }
    }
  }
`;
