import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.footer`
  display: flex;
  width:100%;
  justify-content: center;
  ${breakpointsMedia({
    mobile: css`
      height: 40px;
    `,
    desktop: css`
      height: 65px; 
    `,  
  })}
  background-color:red;
`;

const FooterStyle = {
  Container,
}

export default FooterStyle;