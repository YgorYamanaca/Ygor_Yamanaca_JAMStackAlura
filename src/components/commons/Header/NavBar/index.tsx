import React from 'react';
import GitHubIcon from '@/assets/Icons/gitHubIcon';
import LinkedinIcon from '@/assets/Icons/likedInIcon';
import IconButton from '../../IconButton';
import NavBarStyle from './styles';

const NavBar: React.FC = () => {

  return(
    <NavBarStyle.Container>
      <NavBarStyle.MenuContainer>
        
      </NavBarStyle.MenuContainer>
      <NavBarStyle.UserPhotoContainer>
          <NavBarStyle.UserPhoto />
      </NavBarStyle.UserPhotoContainer>

      <NavBarStyle.MenuContainer>
        <IconButton>
          <LinkedinIcon />
        </IconButton>

        <IconButton>
          <GitHubIcon />
        </IconButton>
      </NavBarStyle.MenuContainer>
    </NavBarStyle.Container>
  );
};

export default NavBar;
