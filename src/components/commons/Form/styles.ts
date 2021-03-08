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
      padding:40px 30px;
    `,
    desktop: css`
      width: 50%;
      padding:50px 30px;
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
  top: 8px;
  right: 12px;
  cursor: pointer;
  z-index: 50;
`;

const FormStyles = {
  Container,
  CloseBox,
};

export default FormStyles;
