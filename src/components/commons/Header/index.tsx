import React from 'react';
import NavBar from './NavBar';
import HeaderStyle from './styles';

const Header: React.FC = () => {

  return(
    <HeaderStyle.Container>
      <NavBar />
    </HeaderStyle.Container>
  );
};

export default Header;