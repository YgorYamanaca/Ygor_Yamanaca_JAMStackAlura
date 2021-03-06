import React from 'react';
import Text from '@/components/foundation/Text';
// import IconButton from '../IconButton';
// import { ModeChangeContext } from '@/theme/ThemeManager';
// import SunAndMoonIcon from '@/assets/Icons/sunAndMoon';
import NavBar from './NavBar';
import HeaderStyle from './styles';

const Header: React.FC = () => (
  // const { mode , toggleMode } = useContext(ModeChangeContext);
  <>
    <HeaderStyle.Container>
      {/* <HeaderStyle.AbsoluteContainer>
        <IconButton onClick={toggleMode}>
          <SunAndMoonIcon mode={mode} />
        </IconButton>
      </HeaderStyle.AbsoluteContainer> */}
      <HeaderStyle.TextBox>
        <Text variant="title">
          Ygor Yamanaca
        </Text>
        <Text variant="subTitle">
          Portifolio
        </Text>
      </HeaderStyle.TextBox>
    </HeaderStyle.Container>
    <NavBar />
  </>
);
export default Header;
