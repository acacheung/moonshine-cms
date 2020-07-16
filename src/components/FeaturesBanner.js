import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const FeaturesBanner = ({ featuresBanner }) => (
  <div>
    {featuresBanner &&
      featuresBanner !== undefined &&
      featuresBanner.length > 0 &&
      featuresBanner[0].features[0].title && (
        <div>
          <div>
            <h2 className='menu__features'>{featuresBanner[0].title}</h2>
            <div className='menu__features__border__top'></div>
          </div>
          <div
            className={
              featuresBanner[0].features.length > 1
                ? 'menu__features__box'
                : 'menu__features__single'
            }
          >
            {featuresBanner[0].features.map((feature) => (
              <div className='menu__features__item' key={v4()}>
                <img
                  className='menu__features__image'
                  src={feature.img}
                  alt={feature.alt}
                />
                <div>
                  <h3 className='menu__features__heading'>{feature.title}</h3>
                  <p className='menu__features__desc'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
  </div>
);

FeaturesBanner.propTypes = {
  featuresBanner: PropTypes.shape({
    title: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
        alt: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
};

export default FeaturesBanner;
