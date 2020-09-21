/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as mixins from '@styles/mixins';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import { up } from 'styled-breakpoints';

import MainTemplate from '../templates/MainTemplate';
import SectionTitle from '../components/Content/SectionTitle';
import Service from '../components/Content/Service';

const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 20px;
  display: inline-block;
  color: #037fff;
  font-size: 2.5rem;
`;

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}

  padding-top: 80px;

  ${up('md')} {
    padding-top: 100px;
  }
  ${up('lg')} {
    padding-top: 120px;
  }
`;

const Row = styled.div`
  ${mixins.makeRow()}
`;

const Image = styled(Img)`
  &:after,
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    height: 65%;
    width: 15px;
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.6;
  }
  &:before {
    left: 0;
    top: 0;
  }
  &:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
`;

const HalfCol = styled.div`
  ${mixins.makeColReady()}
  ${mixins.makeCol()}
  ${up('lg')} {
    ${mixins.makeCol(1, 2)}
  }
`;

const Title = styled.h3`
  margin-top: -12px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const About = ({ path }) => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-image-lg.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 520, maxWidth: 690) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <MainTemplate path={path}>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Row>
          <HalfCol>
            <Image fluid={image.file.childImageSharp.fluid} />
          </HalfCol>
          <HalfCol>
            <Title>
              I am
              <span className="color-secondary"> Greg Kluska</span>
            </Title>
            <p>
              I am a frontend web developer. I can provide clean code and pixel perfect design. I
              also make website more &amp; more interactive with web animations.
            </p>
            <List>
              <li>
                <b>Full Name </b>: Greg Kluska
              </li>
              <li>
                <b>Age </b>: 24 Years
              </li>
              <li>
                <b>Nationality </b>: Polish
              </li>
              <li>
                <b>Languages </b>: English, Polish
              </li>
              <li>
                <b>Freelance </b>: Available
              </li>
            </List>
          </HalfCol>
        </Row>
      </Container>
      <Container>
        <SectionTitle>Services</SectionTitle>
        <Row>
          <Service>
            <Icon icon={faPalette} />
            <h5>Web Design</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
            </p>
          </Service>
          <Service>
            <Icon icon={faCode} />
            <h5>Web Development</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
            </p>
          </Service>
          <Service>
            <Icon icon={faMobileAlt} />
            <h5>Mobile Application</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.
            </p>
          </Service>
        </Row>
      </Container>
      <Container>
        <SectionTitle>Reviews</SectionTitle>
        <Row></Row>
      </Container>
    </MainTemplate>
  );
};

About.propTypes = {
  path: PropTypes.string.isRequired,
};

export default About;
