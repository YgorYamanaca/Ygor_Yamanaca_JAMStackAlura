import React from 'react';
import NavBarStyle from './styles';
import Grid from '@/components/layout/Grid';

const NavBar: React.FC = () => {

  return(
    <NavBarStyle.Container>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={6}
          >
            aaaaaaaaa
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <NavBarStyle.UserPhotoContainer>
          <NavBarStyle.UserPhoto />
      </NavBarStyle.UserPhotoContainer>

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            value={6}
          >
            aaaaaaaaa
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </NavBarStyle.Container>
  );
};

export default NavBar;
