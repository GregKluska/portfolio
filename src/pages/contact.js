import React from 'react';

import PropTypes from 'prop-types';
import MainTemplate from '../templates/MainTemplate';

const Contact = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <div> a </div>
    </MainTemplate>
  );
};

Contact.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Contact;
