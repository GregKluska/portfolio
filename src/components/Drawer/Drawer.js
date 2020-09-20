import React, { useState } from 'react';
import styled from 'styled-components';

import { up } from 'styled-breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  width: 260px;
  height: 100vh;

  position: absolute;
  z-index: 999;

  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  transition: width 0.5s ease-in-out, transform 0.3s ease-in-out;
  transform: translateX(-100%);

  ${({ active }) => active === true && `transform: translateX(0);`}

  ${up('xl')} {
    position: relative;
    transform: translateX(0);
  }

  ${up('xxl')} {
    width: 300px;
  }
`;

const DrawerTrigger = styled.span`
  width: 50px;
  height: 50px;

  position: absolute;
  left: 100%;
  top: 20px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.backgroundSecondary};

  ${up('xl')} {
    display: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 27px;
`;

const Drawer = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper active={active}>
      <DrawerTrigger onClick={() => setActive(!active)}>
        <Icon icon={active ? faTimes : faBars} />
      </DrawerTrigger>
      aababa
    </Wrapper>
  );
};

export default Drawer;
