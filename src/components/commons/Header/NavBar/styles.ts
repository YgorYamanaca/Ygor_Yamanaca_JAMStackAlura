import styled, {css} from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.nav`
  background-color: #ffffff;
  display: flex;
  ${breakpointsMedia({
    mobile: css`
      height: 50px;
      justify-content: center;
    `,
    desktop: css`
      height: 65px; 
      justify-content: flex-start;
    `,  
  })}
  box-shadow: 0px 15px 20px -15px rgba(0,0,0,0.5);
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
      min-width: 235px;
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
  border: 10px solid rgba(0,0,0,0.75);
  ${breakpointsMedia({ 
     mobile: css`
      height: 235px;
      width: 235px;
   `,

    desktop: css`
      height: 205px;
      width: 205px;
    `, 
  })}
  bottom: -20px;
  background-image:url('/images/maxresdefault.jpg');
  background-position:center;
  background-size: cover;
  box-shadow: inset 10px 10px 55px -15px rgba(0,0,0,0.5);
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