import React from 'react';
import PropTypes from 'prop-types';
import { FeaturesBannerTemplate, MenuGroupTemplate } from '../../templates/menu-group';

const MenuGroupPreview = ({ entry }) => {
  const entrySubgroups = entry.getIn(['data', 'subgroups']);
  const subgroups = entrySubgroups ? entrySubgroups.toJS() : [];
  const entryFeaturesBanner = entry.getIn(['data', 'featuresBanner']);
  const featuresBanner = entryFeaturesBanner ? entryFeaturesBanner.toJS() : [];

  return (
    <div>
      <link
        href='https://fonts.googleapis.com/css?family=Merriweather:300i,400,400i&display=swap'
        rel='stylesheet'
      ></link>
      <br />
      <FeaturesBannerTemplate
        title={entry.getIn(['data', 'title'])}
        featuresBanner={featuresBanner}
      />
      <MenuGroupTemplate
        title={entry.getIn(['data', 'title'])}
        subgroups={subgroups}
      />
    </div>
  );
};

MenuGroupPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default MenuGroupPreview;
