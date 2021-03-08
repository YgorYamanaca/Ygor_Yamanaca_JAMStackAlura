import styled from 'styled-components';

const Container = styled.div`
`;

const Input = styled.input`
  width: 100%; 
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 10px 12px;
  outline: 0;
`;

const TextFieldStyle = {
  Container,
  Input,
};

export default TextFieldStyle;
