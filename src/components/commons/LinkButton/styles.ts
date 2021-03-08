import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  cursor: pointer;
  &:active{
    transform: scale(0.97, 0.97);
  }
  &:hover{
    & > span {
      background-color: ${({ theme }) => theme.colors.secondary.main.color};
      transform: scale(1.025, 1.025);
    }
  }
  & > span {
    transition: transform 0.5s ease-in-out, background-color 0.5s ease-in-out;
    border-radius: 16px;
    padding:3px;
  }
  user-select: none;
`;

const LinkButtonStyle = {
  Container,
};

export default LinkButtonStyle;
