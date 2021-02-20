import styled, {css} from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.nav`
  width:100%;
  background-color: #ffffff;
  display: flex;
  ${breakpointsMedia({
    mobile: css`
      height: 40px;
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
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  ${breakpointsMedia({ 
     mobile: css`
      width: 175px;
   `,
    desktop: css`
      width: 225px;
    `, 
  })}
  margin: 0 105px;
`;

const UserPhoto = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 10px solid rgba(0,0,0,0.5);
  ${breakpointsMedia({ 
     mobile: css`
      height: 350px;
      width: 350px;
   `,

    desktop: css`
      height: 225px;
      width: 225px;
    `, 
  })}
  height: 100%;
  width:100%;
  background-image:url('/images/maxresdefault.jpg');
  background-position:center;
  background-size: cover;
  box-shadow: inset 10px 10px 55px -15px rgba(0,0,0,0.5);
`;


const NavBarStyle = {
  Container,
  UserPhotoContainer,
  UserPhoto,
}

export default NavBarStyle;