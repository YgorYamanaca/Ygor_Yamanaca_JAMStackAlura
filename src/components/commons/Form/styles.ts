import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.div`
  display:flex;
  position:relative;
  flex-direction:column;
  place-items:center;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  margin: auto;
  ${breakpointsMedia({
    mobile: css`
      height: 70%;
      width: 85%;

    `,
    desktop: css`
      height: 50%;
      width: 50%;
    `,
  })}
  border-radius:16px;
  padding:20px;

  & > form{
    height: 100%;
    width: 100%;
  }
`;

const CloseBox = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
  z-index: 50;
`;

const FormStyles = {
  Container,
  CloseBox,
};

export default FormStyles;
