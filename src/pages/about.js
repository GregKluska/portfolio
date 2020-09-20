import React from 'react';

import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';

const About = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <div> a </div>
    </MainTemplate>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
};

export default About;
