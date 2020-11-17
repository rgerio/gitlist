import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import { HeaderContainer, HeaderContent } from './styles';

import logoImg from '../../assets/img/gitlist_logo.png';

interface HeaderProps {
  backButtonShown?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backButtonShown = false }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <img src={logoImg} alt="Gitlist" />
        </Link>

        {backButtonShown ? (
          <button type="button" onClick={history.goBack}>
            <FiArrowLeft size={24} />
          </button>
        ) : (
          <div />
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
