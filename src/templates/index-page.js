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
              <p>WE’RE OPEN!</p>
              <p>
                Please call us at{' '}
                <a className='t-link' href='tel:6177524191'>
                  617.752.4191
                </a>{' '}
                for patio reservations or order delivery online with{' '}
                <a
                  className='t-link'
                  href='https://www.grubhub.com/restaurant/moonshine-152-152-dorchester-ave-boston/504704'
                >
                  Grubhub
                </a>{' '}
                and{' '}
                <a
                  className='t-link'
                  href='https://www.ubereats.com/en-US/boston/food-delivery/moonshine-152/Z27-jG8CQvGhH_iG70G_1w/'
                >
                  Uber Eats
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </Layout>
  );
};

export default IndexPage;
