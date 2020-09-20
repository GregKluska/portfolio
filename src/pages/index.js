import React from 'react';

import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';

const Home = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <div> a </div>
    </MainTemplate>
  );
};

Home.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Home;
