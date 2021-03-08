import styled from 'styled-components';

const Container = styled.div`
`;

const Input = styled.textarea`
  width: 100%; 
  height: 150px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
  padding: 10px 12px;
  outline: 0;
  resize: none;
`;

const TextAreaStyle = {
  Container,
  Input,
};

export default TextAreaStyle;
