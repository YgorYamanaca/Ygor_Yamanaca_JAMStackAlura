import SunAndMoonIcon from '@/assets/Icons/sunAndMoon';
import Text from '@/components/foundation/Text';
import { ModeChangeContext } from '@/theme/ThemeManager';
import React, { useContext } from 'react';
import IconButton from '../IconButton';
import NavBar from './NavBar';
import HeaderStyle from './styles';

const Header: React.FC = () => {
  const { mode , toggleMode } = useContext(ModeChangeContext);
  return(
    <>
      <HeaderStyle.Container>
        {/* <HeaderStyle.AbsoluteContainer>
          <IconButton onClick={toggleMode}>
            <SunAndMoonIcon mode={mode} />
          </IconButton>
        </HeaderStyle.AbsoluteContainer> */}
        <HeaderStyle.TextBox>
          <Text variant='title'>
            Ygor Yamanaca 
          </Text>
          <Text variant='subTitle'>
            Portifolio
          </Text>
        </HeaderStyle.TextBox>
      </HeaderStyle.Container>
      <NavBar />
    </>
  );
};

export default Header;