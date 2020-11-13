import React from 'react';

import { HeaderContainer, HeaderContent } from './styles';

import logoImg from '../../assets/img/gitlist_logo.png';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Gitlist" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
