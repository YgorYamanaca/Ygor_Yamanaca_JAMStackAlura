import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.header`
  display:flex;
  position:relative;
  flex-direction: column;
  background: rgb(12,11,61);
  background: linear-gradient(180deg, rgba(12,11,61,1) 0%, rgba(1,0,176,1) 30%, rgba(58,58,255,1) 60%, rgba(5,183,219,1) 95%);
  ${breakpointsMedia({ 
    mobile: css`
      height: 400px;
      place-items:center;
    `,
    desktop: css`
      height: 350px;
      place-content:center;
    `,
  })}
  box-shadow: inset 10px 10px 55px -15px rgba(0,0,0,0.5);
  padding: 50px;
  user-select: none;
`;

const TextBox = styled.div`
  display:flex;
  flex-direction: column;
  text-align:center;
`;

const AbsoluteContainer = styled.div`
  position:absolute;
  right: 25px;
  top: 25px;
`;

const HeaderStyle = {
  Container,
  TextBox,
  AbsoluteContainer,
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