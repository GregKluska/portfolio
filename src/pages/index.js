import React from 'react';

import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';
import Hero from '../components/Content/Hero';

const Home = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <Hero />
    </MainTemplate>
  );
};

Home.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Home;
