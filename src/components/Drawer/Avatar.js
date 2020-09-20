import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { up } from 'styled-breakpoints';

const Wrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  border: 7px solid ${({ theme }) => theme.colors.border};

  width: 150px;
  height: 150px;

  ${up('xl')} {
    width: 200px;
    height: 200px;
  }
`;

const Avatar = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 200, maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Img fluid={image.file.childImageSharp.fluid} />
    </Wrapper>
  );
};

export default Avatar;
