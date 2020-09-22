import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { up } from 'styled-breakpoints';

const Wrapper = styled.div`
  padding-left: ${({ theme }) => theme.gutterSize.xs / 2}px;
  padding-right: ${({ theme }) => theme.gutterSize.xs / 2}px;

  ${up('md')} {
    padding-left: ${({ theme }) => theme.gutterSize.md / 2}px;
    padding-right: ${({ theme }) => theme.gutterSize.md / 2}px;
  }
`;

const Container = styled.div`
  position: relative;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-left: 5px solid ${({ theme }) => theme.colors.border};

  padding: 20px;

  display: flex;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    left: 30px;
    top: 100%;
    border-color: ${({ theme }) => theme.colors.backgroundSecondary} transparent transparent
      ${({ theme }) => theme.colors.backgroundSecondary};
    border-style: solid;
    border-width: 12px;
  }
`;

const AuthorWrapper = styled.div`
  padding-top: 25px;

  display: flex;
  flex-direction: column;

  h5 {
    margin-bottom: 0px;
  }
`;

const Review = ({ author, authorPosition, children }) => {
  return (
    <Wrapper>
      <Container>
        <p>{children}</p>
      </Container>
      <AuthorWrapper>
        <h5>{author}</h5>
        {authorPosition !== null && <span>{authorPosition}</span>}
      </AuthorWrapper>
    </Wrapper>
  );
};

Review.defaultProps = {
  authorPosition: null,
};

Review.propTypes = {
  children: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  authorPosition: PropTypes.string,
};

export default Review;
