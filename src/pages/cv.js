import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mixins from '@styles/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import MainTemplate from '../templates/MainTemplate';

import Container from '../components/Content/Container';

const Row = styled.div`
  ${mixins.makeRow()}
`;

const Cv = ({ path }) => {
  return (
    <MainTemplate path={path}>
      <Container>
        <Row>aa</Row>
      </Container>
      <Container>
        <Row>aa</Row>
      </Container>
      <Container>
        <Row>aa</Row>
      </Container>
    </MainTemplate>
  );
};

Cv.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Cv;
