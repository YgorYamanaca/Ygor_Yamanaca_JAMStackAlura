import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.header`
  display:flex;
  position:relative;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary.main.color};
  ${breakpointsMedia({ 
    mobile: css`
      height: 350px;
      place-items:center;
      padding:25px 10px 65px 10px;
    `,
    desktop: css`
      height: 350px;
      place-content:center;
      padding: 65px 10px;
    `,
  })}
  box-shadow: inset 0 0 80px 20px rgba(0,0,0,0.35);
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