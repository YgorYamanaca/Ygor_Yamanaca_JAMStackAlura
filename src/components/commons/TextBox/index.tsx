import ITextBox from 'interfaces/TextBox';
import React from 'react';
import TextBoxStyle from './styles';

const TextBox: React.FC<ITextBox> = ({ title, children }) => (
  <TextBoxStyle.Container>
    <TextBoxStyle.TitleBox>
      {title}
    </TextBoxStyle.TitleBox>
    <TextBoxStyle.ContentBox>
      {children}
    </TextBoxStyle.ContentBox>
  </TextBoxStyle.Container>
);

export default TextBox;
