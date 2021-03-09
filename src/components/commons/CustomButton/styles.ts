import get from 'lodash/get';
import styled, { css } from 'styled-components';
import breakpointsMedia from 'utils/breakpointsMedia';

const Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${breakpointsMedia({
    mobile: css`
      padding: 5px 10px;
      height:40px;
    `,
    desktop: css`
      padding: 0px 10px;
      height:50px;
    `,
  })}
  width:100%;
  background-color:${({ theme, color }) => get(theme, `colors.${color}.main.color`)};
  cursor: pointer;
  outline: none;
  border: none;
  border-radius:16px;
  user-select: none;
  &:active {
    transform: scale(0.98, 0.98)
  }
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.35;
    cursor: not-allowed;
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  ${breakpointsMedia({
    mobile: css`
      & > svg {
        width: 15px;
        height: 15px;
        margin-left: 10px;
      }
    `,
    desktop: css`
      & > svg {
        width: 20px;
        height: 20px;
        margin-left: 10px;
      }
    `,
  })}
`;

const CustomButtonStyle = {
  Container,
  IconWrapper,
};

export default CustomButtonStyle;
