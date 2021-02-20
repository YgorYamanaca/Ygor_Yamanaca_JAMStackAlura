import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.header`
  display:flex;
  align-items: flex-end;
  width:100%;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(5,0,96,1) 0%, rgba(9,9,121,1) 50%, rgba(5,183,219,1) 100%);
  background-size: cover;
  ${breakpointsMedia({ 
    mobile: css`
      height: 95%;
    `,
    desktop: css`
      height: 50%;
    `,
  })}
  box-shadow: inset 10px 10px 55px -15px rgba(0,0,0,0.5);
  border: 2px solid rgba(0,0,0,0.5);
`;

const HeaderStyle = {
  Container,
}

export default HeaderStyle;

/*
#050060
#090979
#05b7db
#000000
#FFFFFF
box-shadow: 0px 10px 28px -3px rgba(0,0,0,0.5);
*/