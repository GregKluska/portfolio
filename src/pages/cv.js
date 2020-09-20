import React from 'react';

import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';

const Cv = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <div> a </div>
    </MainTemplate>
  );
};

Cv.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Cv;
