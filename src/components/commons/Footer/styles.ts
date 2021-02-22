import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.footer`
  display: flex;
  width:100%;
  padding: 9px;
  justify-content: center;
  place-content: center;
  ${breakpointsMedia({
    mobile: css`
      height: 50px;
    `,
    desktop: css`
      height: 65px; 
    `,  
  })}
  box-shadow: 0px -15px 20px -15px rgba(0,0,0,0.5);
`;

const TextBox = styled.div`
  display:flex;
  align-items:center;
`;

const FooterStyle = {
  Container,
  TextBox,
}

export default FooterStyle;