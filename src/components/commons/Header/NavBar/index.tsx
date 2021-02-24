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
      <a href={'https://www.linkedin.com/in/ygor-yamanaca/'}>
          <IconButton>
            <LinkedinIcon />
          </IconButton>
      </a>
        
        <a href={'https://github.com/YgorYamanaca'}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </NavBarStyle.MenuContainer>
    </NavBarStyle.Container>
  );
};

export default NavBar;
