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
    background-color: rgba(0,0,0,0.25);
  };
  transition: background-color 0.5s ease-in-out;
`;

const IconButtonStyle = {
  Container,
}

export default IconButtonStyle;
