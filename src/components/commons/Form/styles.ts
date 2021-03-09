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
      width: 85%;
      padding:35px 30px 25px 30px;
    `,
    desktop: css`
      width: 50%;
      padding:50px 30px 35px 30px;
    `,
  })}
  border-radius:16px;

  & > form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
`;

const CloseBox = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 14px;
  cursor: pointer;
  z-index: 50;
  ${breakpointsMedia({
    mobile: css`
    & > svg{
      width: 25px;
      height: 25px;
    }
    `,
    desktop: css`
      & > svg{
        width: 35px;
        height: 35px;
      }
    `,
  })}

  &:active{
    transform: scale(0.90, 0.90);
  }
`;

const FormStyles = {
  Container,
  CloseBox,
};

export default FormStyles;
