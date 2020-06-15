import React from 'react';
import logo from '../img/logo.svg';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout>
      <div className='header'>
        <div className='hero'>
          <div className='hero-wrap'>
            <img className='hero__logo' src={logo} alt='Moonshine 152 logo' />
            <div className='is-hidden'>Moonshine 152</div>
            <div className='hero__desc'>
              COVID-19 Updates: Please call Moonshine 152 directly at
              617.752.4191 for patio reservations.
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default IndexPage;
