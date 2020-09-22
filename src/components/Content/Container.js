import styled from 'styled-components';
import * as mixins from '@styles/mixins';
import { up } from 'styled-breakpoints';

export default styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}

  padding-top: 80px;

  ${up('md')} {
    padding-top: 100px;
  }
  ${up('lg')} {
    padding-top: 120px;
  }

  &:last-of-type {
    padding-bottom: 80px;

    ${up('md')} {
      padding-bottom: 100px;
    }
    ${up('lg')} {
      padding-bottom: 120px;
    }
  }
`;
