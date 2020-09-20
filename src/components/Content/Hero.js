import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import * as mixins from '@styles/mixins';

const Wrapper = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}

  height: 100vh;
  display: flex;
  align-items: center;
`;

const Row = styled.div`
  ${mixins.makeRow()}
`;

const Col = styled.div`
  ${mixins.makeColReady()}
  ${mixins.makeCol(23, 24)}

  ${up('md')} {
    ${mixins.makeColOffset(1, 12)}
    ${mixins.makeCol(5, 6)}
  }
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin: 0.67rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SubHeading = styled.div`
  margin-top: 15px;
  font-size: 1.25rem;
  line-height: 2rem;

  text-align: center;

  ${up('lg')} {
    padding: 0 75px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <Heading>
            Hi, I am
            <span> Greg Kluska</span>
          </Heading>
          <SubHeading>
            I am a frontend web developer. I can provide clean code and pixel perfect design. I also
            make website more &amp; more interactive with web animations.
          </SubHeading>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Hero;
