import React, { useState } from 'react';
import GitHubIcon from '@/assets/Icons/gitHubIcon';
import LinkedinIcon from '@/assets/Icons/likedInIcon';
import useIsMobile from 'utils/useIsMobile';
import EmailIcon from '@/assets/Icons/emailIcon';
import IconButton from '../../IconButton';
import NavBarStyle from './styles';
import LinkButton from '../../LinkButton';
import Modal from '../../Modal';
import Form from '../../Form';

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <NavBarStyle.Container>
      <Modal
        isOpen={isOpen}
      >
        {() => (
          <Form onCloseFunction={() => setOpen(false)} />
        )}
      </Modal>
      <NavBarStyle.MenuContainer>
        {useIsMobile()
          ? (
            <IconButton
              onClick={() => setOpen(true)}
            >
              <EmailIcon />
            </IconButton>
          )
          : (
            <LinkButton
              text="Contato"
              onClick={() => setOpen(true)}
            />
          )}
      </NavBarStyle.MenuContainer>
      <NavBarStyle.UserPhotoContainer>
        <NavBarStyle.UserPhoto />
      </NavBarStyle.UserPhotoContainer>

      <NavBarStyle.MenuContainer>
        <a href="https://www.linkedin.com/in/ygor-yamanaca/">
          <IconButton>
            <LinkedinIcon />
          </IconButton>
        </a>

        <a href="https://github.com/YgorYamanaca">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </NavBarStyle.MenuContainer>
    </NavBarStyle.Container>
  );
};

export default NavBar;
