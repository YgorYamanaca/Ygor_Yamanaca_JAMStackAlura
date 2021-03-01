import styled, {css} from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary.main.color};
  display: flex;
  ${breakpointsMedia({
    mobile: css`
      height: 50px;
      justify-content: center;
      margin-bottom:45px;
    `,
    desktop: css`
      height: 65px; 
      justify-content: flex-start;
      margin-bottom:30px;
    `,  
  })}
  box-shadow: 1px 15px 20px -15px rgba(0,0,0, 0.5);
  z-index:10;
  padding:0 5px;
`;

const UserPhotoContainer = styled.div`
  ${breakpointsMedia({ 
     mobile: css`
      order: 0;
   `,
    desktop: css`
      order: -1;
    `, 
  })}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${breakpointsMedia({ 
     mobile: css`
      min-width: 200px;
   `,
    desktop: css`
      min-width: 275px;
      margin-left: 55px;
    `, 
  })}
`;

const UserPhoto = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 7.5px solid ${({ theme }) => theme.colors.primary.main.color};
  ${breakpointsMedia({ 
     mobile: css`
      height: 200px;
      width: 200px;
   `,

    desktop: css`
      height: 205px;
      width: 205px;
    `, 
  })}
  bottom: -20px;
  background-image:url('images/Corgygor3.jpg');
  background-position:center;
  background-size: cover;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content:space-evenly;
  place-items:center;
`;

const NavBarStyle = {
  Container,
  UserPhotoContainer,
  UserPhoto,
  MenuContainer,
}

export default NavBarStyle;