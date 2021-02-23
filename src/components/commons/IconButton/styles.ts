import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 45px;
  width :45px;
  cursor: pointer;
  &:hover{
    background-color: ${({ theme }) => theme.colors.secondary.main.color};
    & > svg { 
      transform: scale(1.1,1.1);
      transition: transform 0.5s ease-in-out;
    }
  };
  transition: background-color 0.5s ease-in-out;
  &:active{
    transform: scale(0.95,0.95);
  }
`;

const IconButtonStyle = {
  Container,
}

export default IconButtonStyle;
